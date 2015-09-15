var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    var length = array.length;
    for(var i=0; i<length; i++){
      if(result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }
    return result;
  };
}).call(this);
