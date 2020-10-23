const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi from your brand new webserver!');
});
const port = 3000;


app.listen(port, () => console.log(`server runing on port: ${port}`));