var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

    

    if(Array.isArray(collection)){
      var result = [];
      var length = collection.length;
      for (var i = 0; i < length; i++){
        result.push(iterator(collection[i]));
      }
      return result;

    } else {
      results = {};
      for (var key in collection){
        results[key] = iterator(collection[key]);
         }
         return results;
       }
  };

}).call(this);
