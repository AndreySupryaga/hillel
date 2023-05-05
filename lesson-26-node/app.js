const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));

app.get('/users', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        const users = JSON.parse(data).users;
        res.send(users);
    });
});

app.post('/users', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        const users = JSON.parse(data).users;
        const id = users.length + 1;
        const user = {...req.body, createdAt: new Date().toLocaleString(), id};
        users.push(user);
        fs.writeFile('data.json', JSON.stringify({users}), err => {
            res.status(201).send(user);
        });
    });
});

app.put('/users/:id', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        const users = JSON.parse(data).users;
        const id = +req.params.id;
        const user = users.find(u => +u.id === id);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        user.name = req.body.name;

        fs.writeFile('data.json', JSON.stringify({users}), err => {
            res.status(201).send(user);
        });
    });
});

app.delete('/users/:id', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        let users = JSON.parse(data).users;
        const id = +req.params.id;
        const user = users.find(u => +u.id === id);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        users = users.filter(u => +u.id !== id);

        fs.writeFile('data.json', JSON.stringify({users}), err => {
            res.status(201).send(user);
        });
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
