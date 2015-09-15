var _ = {};

(function() {

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var result = [];
    if(collection.constructor === Array) {	//if collection is an array
      for(var i=0; i<collection.length; i++) {
        result.push(iterator(collection[i]));
      }
    } else if(collection.constructor === Object) {	//if collection is an object
      for(var key in collection) {
        result.push(iterator(collection[key]));
      }
    }
    return result;
  };

}).call(this);

