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
    // Hold on to the first object so we can extend it.
    var extendedObj = arguments[0];
    
    // For the properties in the arguments object,
    // which we know will be objects.
    for (var prop in arguments) {
      // Hold on to the current object being iterated over.
      var currentObj = arguments[prop];
      // Iterate through the current object.
      for (var key in currentObj) {
        // If the object we want to extend doesn't have a value for the key in the current object.
        if (extendedObj[key] === undefined) {
          // Assign the key/value pair for the current key to the object we want to extend.
          extendedObj[key] = currentObj[key];
        }
      }
    }
    // finally, return the extended object.
    return extendedObj;
  };

}).call(this);