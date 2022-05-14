import Joi from 'joi';

export const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required(),
})

export const registerSchema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(3).max(15).required(),
    password_confirmation: Joi.any().valid(Joi.ref('password')).required()
})

export const passwordsSchema = Joi.object().keys({
    oldPassword: Joi.string().min(3).max(15).required(),
    newPassword: Joi.any().valid(Joi.ref('password')).required()
})
