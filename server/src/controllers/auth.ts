import { Request, Response } from 'express';
const User = require('./../models/user')
const { hashPassword, validatePassword } = require('../utils/hash_password')
const { createJWT } = require('../utils/jwt')

const authLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (!!user === false || validatePassword(password, user.password) === false) {
            return res.status(401).send({
                ok: false,
                msg: "Wrong credentials"
            })
        }

        const token = createJWT(user._id)

        return res.status(200).send({
            ok: true,
            user,
            token
        })
    } catch (error) {
        return res.status(500).send({
            ok: false,
            msg: "Server error"
        })
    }
}

const authNew = async (req: Request, res: Response) => {
    try {
        const isUserExist = await User.findOne({ email: req.body.email })

        if (isUserExist) {
            return res.status(400).send({
                ok: false,
                msg: "User Exist"
            })
        }

        const newUser = User(req.body)

        newUser.password = await hashPassword(newUser.password)

        const result = await newUser.save()

        const token = createJWT(result._id)

        return res.status(200).send({
            ok: true,
            user: result,
            token
        })


    } catch (error) {
        return res.status(500).send({
            ok: false,
            msg: "Server error"
        })
    }
}

const getDataUser = async (req: Request & { userID?: string }, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.userID })



        if (!!user === false) {
            return res.status(401).send({
                ok: false,
                msg: "User Exist"
            })
        }

        const token = createJWT(user._id)

        return res.status(200).send({
            ok: true,
            user: user,
            token
        })


    } catch (error) {
        return res.status(500).send({
            ok: false,
            msg: "Server error"
        })
    }
}

module.exports = {
    authLogin,
    authNew,
    getDataUser
}
