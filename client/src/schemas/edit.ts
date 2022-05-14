import Joi from 'joi';

export const editUser = Joi.object().keys({
    userName: Joi.string().min(6).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    description: Joi.string().optional().allow("")
})