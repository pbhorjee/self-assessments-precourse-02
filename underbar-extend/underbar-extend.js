var _ = {};

(function() {

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection)
      }
    }
  }

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
    var keys = [];
    if (arguments.length > 1) {
      _.each(arguments, function(element) {
        if (keys === undefined) {
          keys = Object.keys(element);
        } else {
          for (var key in element) {
            if (keys.indexOf(key) < 0) {
              keys.push(key);
              obj[key] = element[key];
            } else {
              obj[key] = element[key];
            }
          }
        }
      })
    }
    return obj;
  };

}).call(this);
