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
    
    //store args and results in an object
    // when function is called check results object for that arg
    // if result doesn't exist run function & save & return result, else return value from results object
    var results = {};
    return func.prototype.apply(this) {
      if (results[this]) {
        return results[this];
      }else {
        results[this] = func(this);
        return func(this);
      }
    }

  };

}).call(this);
