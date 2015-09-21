var _ = {};

(function() {
  _.each = function(collection, action) {
    if(Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i++) {
        action(collection[i], i, collection);
      }
    } else {
      for(var key in collection) {
        action(collection[key], key, collection);
      }
    }
  };

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
    var sources = Array.prototype.slice.call(arguments, 1);
    _.each(sources, function(source) {
      _.each(source, function(value, key) {
        obj[key] = value;
      });
    });
    return obj;
  };

}).call(this);
