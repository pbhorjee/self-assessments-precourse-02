var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var unique = [];
    array.forEach(function(item) {
      if (unique.indexOf(item) === -1) {
        unique.push(item);
      }
    });
    return unique;
  };

}).call(this);
