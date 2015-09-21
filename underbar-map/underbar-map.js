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

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var mapped = [];
    _.each(collecttion, function(value) {
      mapped.push(iterator(value));
    });
    return mapped;
  };

}).call(this);
