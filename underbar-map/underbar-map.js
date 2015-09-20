var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

    //declare a variable to hold the new array or object.
    var result;
    //determine whether collection is an object or an array
    //if object, traverse array
    if (Array.isArray(collection)){
    	for (var i = 0; i < collection.length; i++) {
    		//for each element, apply the iterator and push it to result array
    		result.push(iterator(collection[i]));
    	}
    } else if (typeof collection === 'object') {  //else if collection is an object
    	//for each key, apply the iterator to the value
    	for (var key in collection) {
    		//place new/modified property in result object
    		result[key] = iterator(collection[key]);
    	}
    }

    return result;
  };

}).call(this);
