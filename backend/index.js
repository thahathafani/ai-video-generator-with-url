const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('server ');
})

app.listen(8000, () => console.log('server started...'))