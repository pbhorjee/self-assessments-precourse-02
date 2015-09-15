var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

    // Create an array literal to hold results.
    var results = [];

    // Check to see if the collection is an array. If it is, do this:
    if (Array.isArray(collection)) {
      // For each element in the array
      collection.forEach(function(element) {
        // Push the result of applying the iterator to the element to results.
        results.push(iterator(element));
      });
    }
    // I'm not sure if this step is required, but since it says collection...
    // check to see if the collection is an object. If it is, do this:
    else if (typeof collection === "object") {
      // For each key in the collection
      for (var key in collection) {
        // Set a variable for the current element.
        var currentElement = collection[key];
        // // Push the result of applying the iterator to the element to results.
        results.push(iterator(currentElement));
      }
    }
    return results;
  };

}).call(this);