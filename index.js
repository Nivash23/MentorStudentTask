const mongoose = require('mongoose');
const app = require('./app');
const { MONGODB_URI, PORT } = require('./utils/config');


mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected Sucessfully...');
        app.listen(PORT, () => {
            console.log('Server Listening....')
        })
    })
    .catch((e) => {
        console.log(e);
})

