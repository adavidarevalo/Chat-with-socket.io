export { }
const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: { type: String },
    avatar: { type: String },
    online: { type: Boolean, default: false }
}, { timestamps: true })

UserSchema.methods.toJSON = function () {
    const { __v, _id, password, ...object } = this._doc;
    object.uid = _id

    return object
};

module.exports = model('User', UserSchema)