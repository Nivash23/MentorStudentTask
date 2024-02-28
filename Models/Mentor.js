const mongoose = require('mongoose');

const MentorSchema =new mongoose.Schema({
    name: String,
    students: {
        type: Array,
        default: [],
        ref:"students"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:Date
})
const Mentor = mongoose.model('Mentor', MentorSchema, 'Mentors');

module.exports = Mentor;