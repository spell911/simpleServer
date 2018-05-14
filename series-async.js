const async = require("async");

async.series(
  [
    function(callback) {
      // do some stuff ...
      console.log("1");
      callback(null, "one");
    },
    function(callback) {
      // do some more stuff ...
      console.log("2");
      callback("2", "two");
    },
    function(callback) {
      // do some more stuff ...
      console.log("3");
      callback(null, "three");
    },
    function(callback) {
      // do some more stuff ...
      console.log("4");
      callback(null, "four");
    }
  ],
  // optional callback
  function(err, results) {
    console.log("step final");
    if (!err) {
      console.log(results);
    } else {
      console.log("error at " + err + "results : " + results);
    }
    // results is now equal to ['one', 'two']
  }
);
