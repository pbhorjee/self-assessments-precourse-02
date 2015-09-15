var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var sorted = array.sort();
    var results = [];
    for(var i = 0; i < array.length; i++){
      if(array[0+i] !== array[1+i]){
        results.push(array[i])
      }
    }
    return results;
  };

}).call(this);
