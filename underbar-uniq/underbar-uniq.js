var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    // Create an array for results.
    var results = [];
    // Variable that will hold temporary values
    var currentEle;

    // For each element in the array
    array.forEach(function(element) {
      // currentEle is set to the current element
      currentEle = element;
      // if the current element does not yet exist in results
      if (results.indexOf(currentEle) === -1) {
        // push the current element to results
        results.push(currentEle);
      }
    });
    // return the array of unique values
    return results;
  };

}).call(this);

// remove the duplicates from an array like this one.
// [1, 2, 3, 4, 5, 1, 2, 3]...

var test1 = _.uniq([1, 2, 3, 4, 5, 1, 2, 3]);

console.log(test1)