const Admin = require('express').Router();
const Student = require('../Models/Students');
const Mentor = require('../Models/Mentor');

Admin.post('/Assignto/', async (req, res) => {
    const { Studentname, Mentorname } = req.body;
    const stud = await Student.findOne({ name: Studentname });
    const Mentee = await Mentor.findOne({ name: Mentorname });
    if (!stud)
    {
        return res.status(404).json({
            Message:"Student does not exists"
        })
    }
    if (!Mentee)
    {
        return res.status(404).json({ message: "Mentor does not exists" });
    }
    Mentee.students.push(stud._id);
    stud.mentor = Mentee._id;
    await stud.save();
    await Mentee.save();
    res.status(200).json({
        message: "Mentor Assigned sucessfully...",
        Menteename:Mentee.name
    })
})

Admin.post('/changeto/', async (req, res) => {
    const { Studentname, Mentorname, changedMentor } = req.body;
    const stud = await Student.findOne({ name: Studentname });
    const Mentee = await Mentor.findOne({ name: changedMentor });
    const oldMentee = await Mentor.findOne({ name: Mentorname });
    const stud1 = await oldMentee.students.find(obj=>obj._id==stud._id);
    oldMentee.students.pop(stud1)
    await oldMentee.save();
    // await oldMentee.students.pop(stud1);
    if (!stud)
    {
        return res.status(404).json({
            Message:"Student does not exists"
        })
    }
    if (!Mentee)
    {
        return res.status(404).json({ message: "Mentor does not exists" });
    }
    stud.previousmentor = stud.mentor;
    stud.mentor = Mentee._id;
    Mentee.students.push(stud._id);
    await stud.save();
    await Mentee.save();
    // await oldMentee.save();
    res.status(200).json({
        Message:"Mentor changed sucessfully..."
    })


})
module.exports = Admin;