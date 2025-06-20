const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    autoIndex: true, // Automatically create indexes
})

const Category = model('Category', categorySchema)
module.exports = Category