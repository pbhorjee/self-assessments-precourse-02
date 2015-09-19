var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
		var obj = {};
        var result = [];
        array.forEach(function(item) {
            obj[item] = item;
        });
        obj.forEach(function(value) {
            result.push(value);
        });
        return result;
    };

}).call(this);
