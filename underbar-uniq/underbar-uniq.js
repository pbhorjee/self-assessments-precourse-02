var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
		var result = [];
		array.forEach(function(item) {
			if (result.indexOf(item) === -1) {
				result.push(item);
			}
		});
		return result;
  };

}).call(this);
