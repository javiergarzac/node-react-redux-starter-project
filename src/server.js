import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join('public')));

server.get('*', (req, res) => {
    res.sendFile(path.join('public/', 'index.html'), { root: './' });
});

server.listen(port, error => {
    if (error) {
        console.error(error);

        return;
    }
    console.log(`Listening in http://localhost:${port}`);
})