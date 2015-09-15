var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
   
    var result = []; //map() returns an array
    //if Array
    if(Array.isArray(collection)) {
      for(var i = 0; i<collection.length; i++){
        result.push(iterator(collection[i]));
      }
    } else { 
      for(var key in collection){ //if Object
        result.push(iterator[collection[key]]);
      }
    }
    return result;
  };

}).call(this);
