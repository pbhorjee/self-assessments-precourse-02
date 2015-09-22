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

  var table={};
   return function() {
      if(table.hasOwnProperty(arguments[0]))
              return table[arguments[0]]
          else {
              table[arguments[0]] = func.apply(this,arguments)
              return table[arguments[0]]
                }
    
     }











  };

}).call(this);
