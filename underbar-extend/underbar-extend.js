var _ = {};

(function() {


  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
  var newObject = {};
  var temp = {};
  for (var key in arguments) {
    if (arguments[key] !== null && typeof arguments[key] === 'object' )
    temp = arguments[key];
    for (var thing in temp){
      newObject[thing]=temp[thing];
      } 
    }
  if (JSON.stringify(newObject)===JSON.stringify(arguments[0])){
    return arguments[0];
    } 
  return newObject;
  };

}).call(this);
