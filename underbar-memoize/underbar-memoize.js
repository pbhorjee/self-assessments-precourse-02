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
    // create object to store / cache function results
    var memo = {};
    return function() {
      // convert arguments to a real array to be able to access outside of the function
      // source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
      var args = Array.prototype.slice.call(arguments);
      // search 'memo' object see if it contains args - if found then return
      if(args in memo) {
        return memo[args];
      }
      else {
        // memo[args] = 
        // ran out of time (1 hour time limit / struggled with this part)
        // need to store the function's results in memo for future reference
      }
      // return function results
      return memo[args];
    }
  };

}).call(this);
