const async = require("async");

async.parallel(
  [
    function(callback) {
      setTimeout(function() {
        console.log("one");
        callback(null, "one");
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log("two");
        callback(null, "two");
      }, 100);
    },
    function(callback) {
        setTimeout(function() {
          console.log("three");
          callback("3", "three");
        }, 150);
      }
  ],
  // optional callback
  function(err, results) {
    console.dir("step final");
    if (!err) {
      console.dir(results);
    } else {
      console.dir("error at " + err + " results : " + results);
    }
    console.dir(results);
  }
);
