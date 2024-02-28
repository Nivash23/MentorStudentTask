const express = require('express');
const app = express();
const cors = require('cors');
const MentorRouter = require('./Controllers/Mentors');
const StudentRouter = require('./Controllers/Students');
const Admin = require('./Controllers/Admin');


app.use(cors());
app.use(express.json());

app.use('/api/Mentors', MentorRouter);
app.use('/api/Students', StudentRouter);
app.use('/api/Admin',Admin)



module.exports = app;
