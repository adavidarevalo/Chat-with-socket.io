export { };
const User = require('../models/user')
const { uploadToBucket, deleteAvatar } = require('../utils/AWS_s3')

const userConnect = async (id: string) => {
    const user = await User.findById(id)

    user.online = true
    user.save()

    return user
}

const userDisconnect = async (id: string) => {
    const user = await User.findById(id)
    user.online = false
    user.save()
}

const getUsers = async (id: string) => {
    const users = await User.find().sort('-online')

    const deleteUserId = users.filter((user: any) => user._id != id)

    return deleteUserId
}

const editUser = async (id: string, avatar: string, payload: any) => {
    const { userName, email, description, image } = payload
    let imageAWS = avatar

    if (!!image) {
        imageAWS && await deleteAvatar(imageAWS)

        imageAWS = await uploadToBucket(image)
    }

    const user = await User.findOneAndUpdate({ _id: id }, { username: userName, email, description, avatar: imageAWS || '' }, {
        new: true
    })
    return user
}

module.exports = {
    userConnect,
    userDisconnect,
    getUsers,
    editUser
}