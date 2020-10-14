const express = require('express');
const app = express();
const PORT = 3000;



app.get('/', (req, res) => {
    res.send('this is Home');
})

app.get('/insert:insert', (req, res) => {
    console.log(req.params.insert);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});