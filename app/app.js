const express = require('express');
const app = express();
const PORT = 3000;

let server = app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

server.keepAliveTimeout = 30000;

app.get('/', (req, res) => {
    res.send('this is Home');
})

app.get('/insert:insert', (req, res) => {
    console.log("inserting", req.params.insert);
    res.sendStatus(200);
})

app.get('/do:job', (req, res) => {
    console.log("doing", req.params.job);
    res.send(`doing ${req.params.job}`);
})