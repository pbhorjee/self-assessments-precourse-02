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

  _.indexOf = function(collection, target) {
    var result = -1;
    _.each(collection, function(value, i) {
      if(value === target && result === -1) {
        result = i;
      }
    });
    return i;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqItems = [];
    _.each(array, function(value) {
      if(_.indexOf(uniqItems, value) === -1) {
        uniqItems.push(value);
      }
    });
    return uniqItems;
  };

}).call(this);
