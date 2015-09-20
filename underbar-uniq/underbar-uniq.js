var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
	_.uniq = function(array) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			if (result.indexOf(array[i]) < 0) {
				result.push(array[i])
			}
		}
		return result;
	};

}).call(this);
