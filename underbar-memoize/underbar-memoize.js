var _ = {};

(function() {

  // Memorize an expensive function's results by storing them. You may assume
  // that the function takes only one argument and that it is a primitive.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    // Make an object to hold results
    var results = {};
    var result;
    var counter = 0;
    return function() {
      var args = Array.prototype.slice.call(arguments);
      for (var key in results) {
        if (results[key] !== args) {
          result = func.apply(this, args);
          results[counter] = result;
          counter++;
        }
      }
      return result;
    };
  };

}).call(this);