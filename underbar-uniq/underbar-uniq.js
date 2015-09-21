var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var output = [];
    _.each(array, function(value) {
      if(_.indexOf(output, value) === -1) {
        output.push(value);
      }
    });
    return output;
  };

}).call(this);
