var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    
    // iterate over each item in the collection
    // apply the iterate function to each item in the collection and save it to an array
    // return the new array
    var arr = [];
    
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
        arr.push(iterator(collection[i]));
      }
    } else {
      for (var item in collection){
        arr.push(iterator(collection[item]));
      }
    }
    return arr;
  };

}).call(this);
