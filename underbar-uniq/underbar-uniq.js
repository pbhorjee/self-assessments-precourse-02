var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var arrayObject = {};
    var uniqArray = [];
    for (var i = 0; i < array.length; i++){
      arrayObject[array[i]] = array[i];
    }
    for (var key in arrayObject) {
      uniqArray.push(arrayObject[key]);
    }
    return uniqArray;
  };

}).call(this);
