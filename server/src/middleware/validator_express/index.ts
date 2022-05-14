import { Request, Response, NextFunction } from 'express';
const { validationResult } = require('express-validator')

const validateReq = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({
            ok: false,
            errors
        })
    }
    next();
}

module.exports = { validateReq }