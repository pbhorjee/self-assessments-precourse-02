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
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i=0; i<args.length; i++) {
      var thisobj = args[i];
      for (var key in thisobj) {
        obj[key] = thisobj[key];
      }
    }
    return obj;
  };

}).call(this);
