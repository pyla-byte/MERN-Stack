    const { Schema, model } = require('mongoose')

    const commentSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        articleId: {
            type: Schema.Types.ObjectId,// ObjectId type for MongoDB
            ref: 'Article', // Reference to the Article model
            required: true,
        },
    }, {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
        autoIndex: true, // Automatically create indexes
        autoCreate: true,
    })
    const Comment = model('Comment;', commentSchema)
    module.exports = Comment