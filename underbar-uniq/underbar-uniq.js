var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];

    for (var index = 0; index < array.length; index++){
        if (result.indexOf(array[index], 0) === -1){
          result.push(array[index]);
        } else {
          continue;
        }
      }
    return result;
  };
}).call(this);
