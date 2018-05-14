//require
var express = require("express");
const bodyParser = require("body-parser");
const birds = require("./birds");

//express use
var app = express();
var server = require("http").Server(app);
server.listen(8000);
app.use(express.static("web"));
console.log("server running port 8000");

//bodyParser use
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//birds use
app.use("/birds", birds);

/***************************************************/
/********************* stuff ***********************/
/***************************************************/

//query string
app.get("/jungle", function(req, res) {
  console.log(req.query.userName);
  res.end("Welcome to get..." + req.query.userName);
});

//segment
app.get("/jungle/:userName", function(req, res) {
  console.log(req.params);
  res.end("Welcome to get..." + req.params.userName);
});

//json body-parser
app.post("/desert", function(req, res) {
  console.log(req.body);
  let obj = { code: "cod", name: req.body.userName };
  res.json(obj);
  // res.send('Welcome to post...' + req.body.userName);
});

//Route handlers
var cb0 = function(req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function(req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function(req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

//app Route
// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });
