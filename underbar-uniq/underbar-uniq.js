var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    array.forEach(function(a) {
      if (result.indexOf(a) === -1) {
        result.push(a);
      }
    });
    return result;
  };

}).call(this);
