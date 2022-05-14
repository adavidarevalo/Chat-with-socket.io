import { Router, Request, Response } from "express"
const messageController = require("./../controllers/message")
const validateJWT = require("./../middleware/validate_JWT")

const router = Router()

router.get('/:id', validateJWT, (req: Request, res: Response) => messageController.getMessages(req, res))

module.exports = router;