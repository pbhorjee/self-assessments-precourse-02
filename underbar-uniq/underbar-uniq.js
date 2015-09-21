var _ = {};

(function() {

  // _.each() rewrite to help _.uniq() stay clean:
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
  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    _.each(array.sort(), function(val, ind, coll) {
      if(coll[ind + 1] !== val) {
        result.push(val);
      }
    });
    return result;
  };

}).call(this);
