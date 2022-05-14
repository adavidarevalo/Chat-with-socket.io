const { Schema, model } = require('mongoose')

const MessageSchema = Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: { type: String, required: true }
}, {
    timestamps: true
})

MessageSchema.methods.toJSON = function () {
    const { __v, ...object } = this._doc;
    return object
};

module.exports = model('Message', MessageSchema)