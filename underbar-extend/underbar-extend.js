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
    // loop through all arguments that are passed in
    for(var i = 0; i < arguments.length; i++) {
      // loop through the object stored in each respective arguement index
      for(var key in arguments[i]) {
        // Update properties in the original obj w/properties from the passed in object(s)
        obj[key] = arguments[i][key];
      }
    }
    return obj;
  };

}).call(this);
