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
    var cache = {};
    return function() {
      var arg = Array.prototype.slice.call(arguments);
      if(cache.hasOwnProperty(arg)){ //if with already seen argument, get it from cache and return
      return cache[arg];
      } else { //if with a new argument, store it in cache and return it.
        cache[arg] = func.apply(this,arg);
        return cache[arg];
      }
    };
    //this took me more than an hour to figure out..
  };
}).call(this);