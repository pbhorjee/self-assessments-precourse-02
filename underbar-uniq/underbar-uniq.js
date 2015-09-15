var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqArr = [];
    // start looping through the original array
    for(var i = 0; i < array.length; i++) {
      var result = -1;
      // start looping through the duplicate free array
      for(var j = 0; j < uniqArr.length; j++) {
        // array[i] will stay static while looping through the uniqArr
        if(array[i] === uniqArr[j] && result === -1) {
          // update result to the current index of array if array[i] and uniqArr[j] are equal and it is the first time they have matched in th
          result = i;
        }
      }
      // if array[i] is not found in uniqArr then push array[i] to uniqArr (duplicate free array)
      if(result === -1) {
        uniqArr.push(array[i]);
      }
    }
    return uniqArr;
  };

}).call(this);
