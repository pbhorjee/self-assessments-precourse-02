var _ = {};

var indexOf = function (arr, target) {
  var result = -1;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] === target) {
      result = i;
    }
  }
  return result;
};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    for (var i=0; i<array.length; i++) {
      if (indexOf(result, array[i]) < 0) {
        result.push(array[i]);
      }
    }

    return result;
  };

}).call(this);
