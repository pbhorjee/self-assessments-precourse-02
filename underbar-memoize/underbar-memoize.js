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
    //when function is called, check if result value has already been called
    //if so, return it
    //if not, call function and store it in memory
    var storage = {};

    return function(key){
      if(key in storage){
      return storage[key]; //returning that value
      } else {
        storage[key] = func.apply(this, arguments);
        //func.apply(this, arguments) 
        //because arguments have access to multiple parameters
      }
      return storage[key];
      }
  };

}).call(this);
