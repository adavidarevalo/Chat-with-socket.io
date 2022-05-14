import { Router, Request, Response } from "express";
const { check } = require('express-validator')
const authController = require("../controllers/auth")
const { validateReq } = require("../middleware/validator_express")
const validateJWT = require("../middleware/validate_JWT")

const router = Router()

router.post('/login', [
    check('email', "Invalid Email").isEmail(),
    check('password', "Password is required").isLength({ min: 8 }),
    validateReq
], (req: Request, res: Response) => authController.authLogin(req, res))

router.post('/new', [
    check('email', "Invalid Email").isEmail(),
    check('password', "Password is required"),
    check('username')
        .notEmpty()
        .withMessage('username is required')
        .not()
        .matches(/[^A-za-z0-9\s]/)
        .withMessage('Username not use uniq characters'),
    validateReq
], (req: Request, res: Response) => authController.authNew(req, res))

router.post('/user', validateJWT, (req: Request, res: Response) => authController.getDataUser(req, res))


module.exports = router
