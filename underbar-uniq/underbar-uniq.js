var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var unique = [];
    for(var i = 0; i < array.length; i++){
      if(unique.indexOf(array[i]) === -1){
        unique.push(array[i]);
      }
    }
    return unique;
  };

}).call(this);
