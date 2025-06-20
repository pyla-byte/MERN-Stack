const { Schema, model } = require('mongoose')
const { type } = require('os')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Author', 'Admin'],
        default: 'Author',
    }
}, {
    timestamps: true,// Automatically manage createdAt and updatedAt fields
    autoIndex: true, // Automatically create indexes
    autoCreate: true, // Automatically create the collection if it doesn't exist
})

const User = model('User', userSchema)
module.exports = User