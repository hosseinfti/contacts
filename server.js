const fs = require('fs');
const express = require("express");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {
    fs.readFile('./src/json/data.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.post("/", (req, res) => {
   res.send("This is home page with post request.");
});

// PORT
const PORT = 8880;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
