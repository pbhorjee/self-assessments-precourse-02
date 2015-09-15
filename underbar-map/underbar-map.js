var _ = {};

(function() {
  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
	var mapped = [];
    if(collection.constructor === Array){
		for(var i = 0; i < collection.length; i++){
			var index = i;
			mapped.push(iteration(collection[index], index, collection));
		}
    }
	if(collection.constructor === Object){
		for(var key in collection){
			mapped.push(iteration(collection[key], key, collection));
		}
    }
	return mapped;
  };

}).call(this);
