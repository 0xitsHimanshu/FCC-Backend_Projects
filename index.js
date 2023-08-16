// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const port = 5000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/timestamp", function (req, res) {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api", (req, res)=>{
    const currentDate = new Date().toUTCString;
    const currentUnix = Date.parse(currentDate)

    res.json({unix: currentUnix, utc: currentDate});
})

app.get("/api/:date", (req, res)=>{
    const dateString = req.params.date;
    const dateStringRegex = /^[0-9]+$/;
    const numbersOnly = dateStringRegex.test(dateString);

    if(!numbersOnly){
        const unixTimestamp = Date.parse(dateString);
        const utcDate = new Date(unixTimestamp).toUTCString;

        unixTimestamp
        ? res.json({unix:unixTimestamp , utc : utcDate})
        : res.json({error: "Invalid Date"})

    } else {
        const unixTimestamp = parseInt(dateString);
        const utcDate = new Date(unixTimestamp).toUTCString;
        
        res.json({unix: unixTimestamp, utc: utcDate});
    }
})

// listen for requests :)
const listener = app.listen(port, function () {
  console.log(`Your server is succesfully running on http://localhost:${port}`);
});