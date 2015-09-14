var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var result;
    if (Array.isArray(collection)) {
      result = [];
      for (var i = 0; i < collection.length; i++) {
        result.push(iterator(collection[i]));
      }
      return result;
    } else {
      result = {};
      for (var key in collection) {
        result[key] = iterator(collection[key]);
      }
      return result;
    }
  };

}).call(this);
