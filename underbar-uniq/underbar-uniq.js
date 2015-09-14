var _ = {};

(function() {

  _.contains = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
      if (!_.contains(output, array[i])) {
        output.push(array[i]);
      }
    }
    return output;
  };

}).call(this);
