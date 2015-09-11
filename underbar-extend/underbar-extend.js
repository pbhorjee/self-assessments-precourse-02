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
    //iterate over arguments
    // pass each items properties into the newObj
    var newObj = {};
    
    for (var i = 0; i < arguments.length; i++){
      for (var prop in arguments[i] ) {
        newObj[prop] = arguments[i][prop];
      }
    }
    return newObj; 
  };

}).call(this);
