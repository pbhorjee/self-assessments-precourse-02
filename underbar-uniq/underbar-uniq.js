var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqArray = [];
    for (var i = 0; i < array.length; i++) {
      if (uniqArray.indexOf(array[i]) === -1) {
        uniqArray.push(array[i])
      }
    }
    return uniqArray;
  };

}).call(this);
