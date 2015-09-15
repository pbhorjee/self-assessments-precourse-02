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
    var computed = {};

    return function(){
      var args = Array.prototype.slice.call(arguments);
      if(computed.hasOwnProperty(args)){
          return computed[args];
        } else {
          computed[args] = func.apply(this, arguments)
          return computed[args];
        }
      }
  };

}).call(this);
