var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var result = [];
    _.each(collection, function(element) {
      result.push(iterator(element));
    })
    return result;
// map() is a useful primitive iteration function that works a lot
// like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
  };

}).call(this);
