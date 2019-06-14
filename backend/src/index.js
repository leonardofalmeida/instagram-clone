const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://leo-gt:gt-leo@cluster0-yjljg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', (req, res) => {
    return res.send(`Olá ${req.query.name}`);
})

app.listen(3333);

