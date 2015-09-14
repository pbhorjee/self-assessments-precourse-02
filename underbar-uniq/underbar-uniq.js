var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
        
   var result = [];

     array.forEach(function(index){
      if(array.indexOf(result, index) === -1){
        result.push(index);
      }
     });
    return arr;
  };

}).call(this);