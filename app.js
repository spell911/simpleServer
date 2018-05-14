require('./foo.js');
var msg_goo = "hi am goo fnc"; 
foo();
goo(msg_goo);

var bar = require('./bar.js');
bar();

// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('am in!\n');
// }).listen(8000);
// console.log("server running port 8000"); 
