var _ = {};

(function() {
   _.each = function(collection, iterator) {
    if(Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for(var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };
  
  _.indexOf = function(array, target){
    var result = -1;
    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };
  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var output = [];
    _.each(array, function(value) {
      if(_.indexOf(output, value) === -1) {
        output.push(value);
      }
    });
    return output;
  };

}).call(this);
