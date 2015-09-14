var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var output = [];
    var i;
    if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        output.push(iterator(collection[i], i, collection));
      }
    } else {
      var keys = Object.keys(collection);
      for (i = 0; i < keys.length; i++) {
        output.push(iterator(collection[keys[i]], keys[i], collection));
      }
    }
    return output;
  };

}).call(this);
