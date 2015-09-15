var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
	var newArray = Array.prototype.slice.call(array);
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array.length; j++){
			if(i !== j){
				if(array[i] === array[j]){
					newArray.splice(j, 1);
				}
			}
		}
	}
	return newArray;
  };

}).call(this);
