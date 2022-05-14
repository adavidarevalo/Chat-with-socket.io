import { Request, Response } from 'express';
const User = require('./../models/user')
const { hashPassword, validatePassword } = require('../utils/hash_password')
const { createJWT } = require('../utils/jwt')

const editPassword = async (req: Request & { userID?: string }, res: Response) => {

    const { oldPassword, newPassword } = req.body

    try {
        const user = await User.findOne({ _id: req.userID })

        if (!!user === false || validatePassword(oldPassword, user.password) === false) {
            return res.status(401).send({
                ok: false,
                msg: "Wrong credentials"
            })
        }

        user.password = await hashPassword(newPassword)

        const result = await user.save()

        return res.status(200).send({
            ok: true
        })
    } catch (error) {
        return res.status(500).send({
            ok: false,
            msg: "Server error"
        })
    }
}

module.exports = {
    editPassword
}