var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var mapped = [];
    _.each(collection, function(val) {
      mapped.push(iterator(val));
    });
    return mapped;
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
  };

}).call(this);
