const express = require('express');
const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
    res.send('All books');
});

bookRouter.get('/:bookId', (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});

bookRouter.get('/:bookId/reverse', (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID reverse: ${bookId.split('').reverse().join('')}`);
});

bookRouter.post('/:bookId/reverse', (req, res) => {
    const { bookId } = req.params;
    res.send(`POST book ID: ${bookId}`);
});

module.exports = bookRouter;
