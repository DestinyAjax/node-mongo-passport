const express  = require('express');
const users = require('./routes/users');

const app = express();

app.use('/users', users);

app.get('/', (req, res, next) => {
    res.send("Hello world")
});

app.listen(5000, function()   {
    console.log("Server is running on");
});

module.exports = app;