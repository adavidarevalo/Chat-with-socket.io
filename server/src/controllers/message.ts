import { Request, Response } from 'express';
const Message = require('../models/message')

const getMessages = async (req: Request & { userID?: string }, res: Response) => {
    const userId = req.userID
    const urlId = req.params.id

    try {
        const messages = await Message.find({
            $or: [
                { from: userId, to: urlId },
                { to: userId, from: urlId },
            ]
        }).sort({ createdAt: 'asc' }).limit(30)

        return res.status(200).send({
            ok: true,
            messages: messages
        })

    } catch (error) {
        return res.status(500).send({
            ok: false,
            msg: "Server error"
        })
    }
}

const createPersonalMessage = async (payload: any) => {
    const newMessage = new Message(payload)
    const response = await newMessage.save()
    return response
}

module.exports = {
    getMessages,
    createPersonalMessage
}