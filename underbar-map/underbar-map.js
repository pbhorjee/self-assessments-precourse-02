var _ = {};

(function() {

  _.each = function(collection, iterator) {
    var i;
    if( Array.isArray(collection) ) {
      for( i = 0; i < collection.length; i++ ) {
        iterator(collection[i], i, collection);
      }
    }
    else {
      for( i in collection ) {
        iterator(collection[i], i, collection);
      }
    }
  }

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var mapped = Array.isArray(collection) ? [] : {};
    
    _.each(collection, function(value, key) {
      mapped[key] = iterator(value);
    });
    
    return mapped;
  };

}).call(this);
