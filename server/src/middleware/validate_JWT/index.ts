const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express';

const validateJWT = (req: Request & { userID?: string }, res: Response, next: NextFunction) => {
    const authorization = req.rawHeaders.indexOf('authorization') + 1

    const token = req.rawHeaders[authorization].replace('Bearer ', '')

    const { id } = jwt.verify(token, process.env.JWT_KEY)

    if (!!id === false) {
        res.status(401).send({
            ok: false,
            msg: "Invalid Token"
        })
    }

    req.userID = id;

    next()
}

module.exports = validateJWT