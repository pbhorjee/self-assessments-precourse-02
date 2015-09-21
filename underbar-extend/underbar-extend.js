var _ = {};

(function() {


  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    //traverse each new argument passed to the function.
    for (var i = 1; i < arguments.length; i++) {
      //for each argument, iterate of each key of the object
      for (var key in arguments[i]) {
        //add each key/value pair to obj
        obj[key] = arguments[i][key];
      }
    }
    return obj;
  };

}).call(this);
