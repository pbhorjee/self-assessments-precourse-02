var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  	var seen = [];
  	var results = [];
  	var x = 0;

  	for (var i = 0; i < array.length; i++) {
  		var arrayEl = array[i];
  		if (seen[arrayEl] !== 1) {
  			seen[arrayEl] = 1;
  			results[x++] = arrayEl;
  		}
  	}
  	return results;
  };

}).call(this);
