const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    image:{
        type: String,
    },
});
const Blog = mongoose.model('blog', BlogSchema);
module.exports = Blog;