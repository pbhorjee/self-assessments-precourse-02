var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) { 
      var found = false;
      for (var j = 0; j < res.length; j++) {
        if (res[j] === array[i]) {
          found = true;
        }
      }
      if (found === false) {
        res.push(array[i]);
      }
    }
    return res;
  };

}).call(this);
