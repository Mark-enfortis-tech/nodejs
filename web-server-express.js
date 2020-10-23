const express = require('express');
const app = express();

process.env.NODE_ENV = "development";

app.get('/', (req, res) => {
    const date = JSON.stringify(Date.now());
    res.send(`Hi from your brand new webserver the date is: ${date}`);
});
const port = 3000;


const server = app.listen(port, () => console.log(`server runing on port: ${port}, process.pid ${process.pid}, process.env = ${process.env.NODE_ENV}`));

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    })
})