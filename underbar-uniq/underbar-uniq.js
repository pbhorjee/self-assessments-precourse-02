var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqArray = [];
    _.each(array, function(val) {
      if(!_.contains(uniqArray, val)) {
        uniqArray.push(val);
      }
    })
  };

}).call(this);
