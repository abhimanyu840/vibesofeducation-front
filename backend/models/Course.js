const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    coursetitle: {
        type: String,
        required: true
    },
    coursedescription: {
        type: String,
        required: true
    },
    videoid: {
        type: String,
        required: true
    },
    videotitle: {
        type: String,
        required: true
    },
    texttutorial: {
        type: String,
    },
    downloads: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
    },
});
const Course = mongoose.model('course', CourseSchema);
module.exports = Course;