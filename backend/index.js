const express = require("express");
const uniqid = require("uniqid");
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('server ');
});

app.get('/story', (req, res) => {
    const url = req.query.url;
    const id = uniqid();
    const dir = id;  // Define the directory name
    const path = './stories/' + dir;
    fs.mkdirSync(path, { recursive: true });

    console.log({
        url,
    });

    return res.json('ok');
});

app.listen(8000, () => console.log('server started...'));
