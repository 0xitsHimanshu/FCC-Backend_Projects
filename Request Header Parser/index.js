require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/views/index.html');
});

//api endpoints
app.get('/api/hello', (req, res)=>{
    res.json({greeting: 'Hello api'});
})
app.get('/api/whoami', (req, res)=>{
    const ipAddres = req.ip;
    const lang = req.headers['accept-language'];
    const Software = req.headers['user-agent'];

    res.json({
        ipaddress: ipAddres,
        language: lang,
        software: Software
    });
})
//listen for the request
app.listen(port, ()=>{
    console.log(`Server is running successfully on the http://localhost:${port}`);
})