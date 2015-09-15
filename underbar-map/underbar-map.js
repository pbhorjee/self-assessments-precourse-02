var _ = {};

(function() {


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
   var i;
   var key;
   if (collection.constructor === Array) {
        var array = [];
        for (i = 0; i < collection.length; i++){
            array.push(iterator(collection[i]));  
        }  
      return array;
   } 
   else {
       var object = {};
       for (key in collection){
           object.push(iterator(key, collection[key]));
        }
      return object;
    } 
  };

}).call(this);
