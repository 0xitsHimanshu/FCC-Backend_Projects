require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {MongoClient} = require('mongodb');
const dns = require('dns');
const urlparser = require('url');


const port = 3000;

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res)=>{
    res.sendFile(process.cwd()+'/views/index.html');
});

app.listen(port, ()=>{
    console.log(`Server is running successfully on port http://localhost:${port}`);
})