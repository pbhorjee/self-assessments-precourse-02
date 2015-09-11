var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    //iterate over array items
    // add to new array if it doesn't already exist in the new array
    //return new array
    
   var arr = []; 
      for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1 ) {
          arr.push(array[i]);
        }  
      }
    return arr;
  };

}).call(this);
