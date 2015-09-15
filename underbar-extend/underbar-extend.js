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
    var args = Array.prototype.slice.call(arguments,1);

    var loopObjects = function() {
      if (args.length === 0) {
        return;
      }

      var tmpObj = args.pop();

      for (var key in tmpObj) {
        obj[key] = tmpObj[key];
      }

      loopObjects();
    };

    loopObjects();

  };

}).call(this);