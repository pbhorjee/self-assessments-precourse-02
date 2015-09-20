var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

    var resultArray = [];
    var resultObject = {};

    if (Array.isArray(collection)){
    	for (var i = 0; i < collection.length; i++) {
    		resultArray.push(iterator(collection[i]));
    	}
    	return resultArray;
    } else if (typeof collection === 'object') { 
    	for (var key in collection) {
    		resultObject[key] = iterator(collection[key]);
    	}
    	return resultObject;
    } 
  };
}).call(this);
