var _ = {};

(function() {
  // Quick _.each() implementation to keep _.extend clean:
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else if (typeof(collection) === 'object') {
      for (var key in collection) {
        iterator(collection[key], key, collection);
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
    var donors = [].slice.call(arguments, 1);
    _.each(donors, function(donor) {
      for (var key in donor) {
        obj[key] = donor[key];
      }
    });
  };

}).call(this);
