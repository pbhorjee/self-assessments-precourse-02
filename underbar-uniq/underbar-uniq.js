var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var unique = [];
    _.each(array, function(item){
      if(_.indexOf(unique, item) === -1) {
        unique.push(item);
      }
    });
    return unique;
  };

}).call(this);
