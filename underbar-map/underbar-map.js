var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    
    var ret = JSON.parse(JSON.stringify(collection));

    if (Array.isArray(collection)) {
      for (var i = 0, l = collection.length; i < l; i++) {
        ret[i] = iterator(collection[i]);
      }      
    } else {
      for (var key in collection) {
        ret[key] = iterator(collection[key]);
      }
    }

    return ret;
  };

}).call(this);