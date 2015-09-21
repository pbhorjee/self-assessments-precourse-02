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
    //store outputs with their given inputs
    var cache = {};
    var output = func;

    return function(input) {
      //check if the input has been run before, if not
      if (!(input in cache)) {
        //run the function, store the output with the input, and return it
        cache[input] = output; //Don't know how to run original function here...
        return cache[input];
      } else {
        return cache[input];
      }
    }
  };
}).call(this);
