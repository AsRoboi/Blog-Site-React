/* import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});

 */

const express = require('express');

const app = express();
app.use(express.json());
app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send('Hello!');
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
