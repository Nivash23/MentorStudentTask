const StudentRouter = require('express').Router();
const Student = require('../Models/Students');

StudentRouter.post('/', async (req, res) => {
    const { name } = req.body;
    const stud = await Student.findOne({ name });
    if (stud)
    {
        return res.status(404).json({ message: "Student already exists..." });
    }
    const student = new Student({
        name
    })
    const savedStudent = await student.save();

    res.status(200).json(savedStudent);
})
StudentRouter.get('/previousMentor/', async(req, res) => {
    const { Studentname } = req.body;
    const stud = await Student.findOne({ name: Studentname });
    if (!stud)
    {
        return res.status(404).json({ message: "Student does not exists" })
    }
    res.status(200).json({
        previousMentor:stud.previousmentor
    })
})

module.exports = StudentRouter;