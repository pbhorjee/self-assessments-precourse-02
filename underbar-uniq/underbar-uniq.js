var _ = {};

(function() {

  var contains = function(array, item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return true;
      }
    }
    return false;
  }


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (!contains(result, array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  };

}).call(this);
