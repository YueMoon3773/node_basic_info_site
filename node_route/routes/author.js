const express = require('express');

const authorRouter = express.Router();

authorRouter.get('/', (req, res) => {
    res.send('All authors');
});

authorRouter.get('/:authorId', (req, res) => {
    const { authorId } = req.params;
    res.send(`Author Id: ${authorId}`);
});

module.exports = authorRouter;
