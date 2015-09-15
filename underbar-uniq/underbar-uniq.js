var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var arr = [];

    array.forEach(function(element, index){
      if (arr.indexOf(element) === -1) { 
        arr.push(element); 
      }
    });

    return arr;
  };

}).call(this);