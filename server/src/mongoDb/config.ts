const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true }, (err: any) => {
        if (err) {
            console.error('Connection to DB failed');
        } else {
            console.log('Connection to DB was successful');
        }
    })
}
const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;