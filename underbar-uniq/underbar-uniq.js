var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var finalArray = [];
    _.each(array, function(item) {
        if ((_.indexOf(finalArray, item)) === -1) {
          finalArray.push(item);
        }
    });
    return finalArray;

  };

}).call(this);
