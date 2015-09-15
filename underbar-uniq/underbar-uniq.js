var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  //set up an empy array and an object
  //turn elements in theh array into object's keys
  //since duplicate keys in object are replaced
  //turn the object keys back into a unique array
  var objj = {};
  var unique = [];

  for(var i = 0; i<array.length; i++){
    obj[array[i]] = array[i]; //assigning array element to object keys
  }

  for(var key in obj){
    unique.push(obj(key));
  }
  return unique;
  };

}).call(this);
