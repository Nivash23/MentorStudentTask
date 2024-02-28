const MentorRouter = require('express').Router();
const Mentor = require('../Models/Mentor');

MentorRouter.post('/', async(req, res) => {
    const { name } = req.body;
    const mentee =await Mentor.findOne({name});
    if (mentee)
    {
        return res.status(401).json({message:"Mentor already exists"})
    }
    const mentor = new Mentor({
        name
    })
    const savedMentor = await mentor.save();
    res.status(200).json(savedMentor)
})
MentorRouter.get('/students/', async(req, res) => {
    const { Mentorname } = req.body;
    const mentor = await Mentor.findOne({ name: Mentorname })
    if (!mentor)
    {
        return res.status(404).json({message:"Mentor does not exists"})
    }
    res.status(200).json({
        students:mentor.students
    })
})

module.exports = MentorRouter;

