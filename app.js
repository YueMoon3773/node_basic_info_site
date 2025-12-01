const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const server = http.createServer(async (req, res) => {
    // console.log('req url: ', req.url);
    // console.log('req method: ', req.method);

    // console.log(__dirname);

    // res.setHeader('Content-Type', 'text/html');

    let fileName = '';
    let statusCode = 0;
    switch (req.url) {
        case '/home':
            fileName = 'home.html';
            statusCode = 200;
            break;
        case '/about':
            fileName = 'about.html';
            statusCode = 200;
            break;
        case '/contact':
            fileName = 'contact.html';
            statusCode = 200;
            break;
        default:
            fileName = '404.html';
            statusCode = 404;
            break;
    }

    const filePath = path.join(__dirname, 'views', fileName);
    // console.log(fileName);

    res.writeHead(statusCode, { 'Content-Type': 'text/html; charset=utf-8' });

    try {
        const html = await fs.readFile(filePath, { encoding: 'utf8' });
        res.end(html);
    } catch (err) {
        console.log(err);
    }
});

server.listen(3000);
