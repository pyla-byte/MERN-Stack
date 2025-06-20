const { Schema, model } = require("mongoose")

const articleSchema = new Schema({
    title:
    {
        type: String,
        required: true,
    },
    content:
    {
        type: String,
        required: true,
    },
    image:
    {
        type: String,
        required: false,
    },
    categoryId:
    {
        type: Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true,
    },

}, {
    timestamps: true,
    autoIndex: true, // Automatically create indexes
    autoCreate:true, // Automatically create the collection if it doesn't exist
})

const Article = model('Article', articleSchema)
module.exports= Article