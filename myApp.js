var express = require('express');
var bodyParser = require('body-parser');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
const urlencoded = require('body-parser/lib/types/urlencoded');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/scripts", express.static(__dirname + "/scripts"));

app.post("/new_student", (req, res) => {
  console.log(`NEW STUDENT *** name: ${req.body.name}, contact: ${req.body.contact}, language: ${req.body.fav_language}`);
  //next();    
  //res.write('new student');
})


app.get("/about", (req, res) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    res.sendFile(__dirname + '/views/about.html');
    //next();
})

app.get("/blog", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/blog.html');
  //next();
})

app.get("/contact", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/contact.html');
  //next();
})

app.get("/courses", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/courses.html');
  //next();
})

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/index.html');
  //next();
})

module.exports = app;
