//createServer
// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('am in!\n');
// }).listen(8000);
// console.log("server running port 8000"); 

var msg = "ggwp";
//Module Pattern 1
require('./foo.js');
foo();
foo2(msg);
//Module Pattern 2
var bar = require('./bar.js');
bar();
//Module Pattern 3
var fiz = require('./fiz.js'); 
fiz.fiz();
fiz.fiz2(msg);
//Module Pattern 4
var buz = require('./buz.js'); 
buz.log();
buz.log2(msg);
//Module Pattern 5
var baz = require('./baz.js').Baz; 
baz.log();
//Module Pattern 6
var Doo = require('./doo.js'); 
var doo = new Doo();
doo.log();
//Module Pattern 7
var Qux = require('./qux.js').Qux; 
var qux = new Qux(); 
qux.log();

