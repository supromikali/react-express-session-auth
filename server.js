const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({secret: '.', resave: false, saveUninitialized: true}));

app.use(function (req, res, next) {
    console.log(req.session.user);
    if (req.session.user) {
        return res.send(req.session.user);
    }
    next()
});

app.post('/api/login', function (req, res, next) {
    req.session.user = "test";
    res.send("ok")
});

app.listen(5000, () => {
    console.log(`server running on port ${5000}`);
});