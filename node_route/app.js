const express = require('express');
require('dotenv').config();

const authorRouter = require('./routes/author');
const bookRouter = require('./routes/books');

const app = express();

app.get('/', (req, res) => res.send('HOME PAGE. Hello, world!'));

app.get('/about', (req, res) => {
    res.send('ABOUT');
});

app.get('/contact', (req, res) => {
    res.send('GET CONTACT');
});

app.post('/contact', (req, res) => {
    res.send('POST CONTACT');
});

app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.use((req, res) => {
    res.status(404).send('404 PAGE NOT FOUND');
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on PORT: ${process.env.PORT}`);
});
