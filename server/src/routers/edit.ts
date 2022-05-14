import { Router, Request, Response } from "express";
const { check } = require('express-validator')
const editController = require("../controllers/editUser")
const { validateReq } = require("../middleware/validator_express")
const validateJWT = require("../middleware/validate_JWT")

const router = Router()

router.post('/password', [
    check('oldPassword', "Password is required").notEmpty(),
    check('newPassword', "Password is required").notEmpty(),
    validateReq,
    validateJWT
], (req: Request, res: Response) => editController.editPassword(req, res))


module.exports = router
