const mongoose = require('mongoose');

const StudentsSchema =new mongoose.Schema({
    name: String,
    mentor: String,
    previousmentor:String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:Date
})
const Student = mongoose.model('Student', StudentsSchema, 'Students');

module.exports = Student;