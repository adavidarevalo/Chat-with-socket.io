const { Server } = require("socket.io");
const { getDataJWT } = require("./../utils/jwt")
const { userConnect, userDisconnect, getUsers, editUser } = require("./../controllers/socket")
const { createPersonalMessage } = require("./../controllers/message")

class SocketService {
    io: any
    constructor(http: any) {
        this.io = new Server(http);
        this.startSocketService()
    }
    startSocketService() {
        this.io.on('connection', async (socket: any) => {
            console.log('Connected Client')

            const userToken = socket.handshake.query['Authorization']

            const { ok, id } = getDataJWT(userToken)

            if (ok === false) {
                return socket.disconnect()
            }

            const user = await userConnect(id)


            socket.join(id)

            socket.on('personal-message', async (payload: any) => {
                const newMessage = await createPersonalMessage(payload)

                this.io.to(payload.from).emit('personal-message', newMessage)
                this.io.to(payload.to).emit('personal-message', newMessage)
            })

            socket.on('edit-profile', async (payload: any) => {
                const response = await editUser(id, user?.avatar, payload)
                this.io.to(id).emit('edited-profile', response)
                this.io.emit('user-list', await getUsers(id))
            })

            this.io.emit('user-list', await getUsers(id))

            socket.on('disconnect', async () => {
                await userDisconnect(id)
                this.io.emit('user-list', await getUsers())
            })
        });

    }
}

module.exports = SocketService
