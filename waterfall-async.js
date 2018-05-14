const async = require("async");

async.waterfall(
  [
    function(callback) {
      console.log("step 1");
      callback(null, "one", "two");
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
      console.log("step 2");
      callback(null, "three");
    },
    function(arg1, callback) {
      console.log("step 3");
      // arg1 now equals 'three'
      callback(null, "done");
    }
  ],
  function(err, result) {
    console.log("step final");
    if (err) {
      console.log(err + " AT " + result);
    } else {
      console.log(result);
    }
    // result now equals 'done'
  }
);
