/* eslint-disable no-console */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//eslint-disable-next-line
const router = express.Router();

const start = (host, port, corsAllowOrigin) => {
    console.log(`Starting up mock server on: http://${host}:${port}`);
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', corsAllowOrigin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        next();
    });

    const user = (userName) => {
        return {
            "login": userName,
            "company": `company_${userName}`,
            "blog": `http://${userName}.com`,
        }
    };

    const users = [
        {
            "login": "mojombo",
            "id": 1
        },
        {
            "login": "defunkt",
            "id": 2
        },
        {
            "login": "pjhyett",
            "id": 3
        },
        {
            "login": "rambo",
            "id": 4
        },
        {
            "login": "john",
            "id": 5
        },
        {
            "login": "james",
            "id": 6
        }]

    router.get('/users', (req, res) => {
        res.status(200).json(users);
    });

    router.get('/users/*', (req, res) => {
        userName = req.params['0'];
        res.status(200).json(user(userName));
    });

    app.use('/', router);

    app.listen(port, () => {
        console.log(`Mock server listening on port ${port}!`);
    });
};

module.exports = {
    start
};

start('localhost', 5050, 'http://localhost:3000');