var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var results = [];
    if(Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        results.push(iterator(collection[i]));
      }
      return results;
    }
    else {
      for (var key in collection) {
        results.push(iterator(collection[key]));
      }
      return results;
    }
  };

}).call(this);
