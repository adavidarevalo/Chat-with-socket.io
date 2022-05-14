import express, { Application } from 'express';
const http = require('http')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();
const SocketService = require('./../socket/config')
const connectDB = require('./../mongoDb/config')
const authRouter = require('./../routers/auth')
const messageRouter = require('./../routers/message')

class ExpressServer {
    public app: Application;
    public http;
    constructor() {
        this.app = express();
        this.http = http.Server(this.app)
    }
    middleware() {
        this.app.use(bodyParser.json());

        this.app.use("/public", express.static(path.join(__dirname, './../public')))
        this.app.use(cors())
        this.app.use('/api/auth', authRouter)
        this.app.use('/api/message', messageRouter)
    }
    startServer() {
        this.middleware();
        connectDB()
        new SocketService(this.http)
        this.http.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}/`));
    }
}

module.exports = ExpressServer;
