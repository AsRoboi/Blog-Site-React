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
/* import express from express; */
let articleInfo = [
    {
        name: 'learn-web-design',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'responsive-design',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'ux-design',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'ux-visual-design',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'portfolio-building',
        upvotes: 0,
        comments: [],
    }
];

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articleInfo.find(a => a.name === name);

    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    }
    else {
        res.send('The article doesn\t exist');
    }


});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { PostedBy, text } = req.body;

    const article = articleInfo.find(a => a.name=== name);

    if (article) {
        article.comments.push({PostedBy, text});  
        res.send(article.comments);
    }else{
        res.send('The article doesn\t exist!');
    }


});

/* app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send('Hello!');
});

app.get('/hello/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Hello ${name}!!`);
});
 */
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
