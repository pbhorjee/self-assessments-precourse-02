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
    var args = [];
    var temp = null;
    for(var i = 0; i < arguments.length; i++){
      temp = arguments[i];
      args.push(temp);
    }

    var extended = function(arr){
      for(var j = 0; j < arr.length; j++){
        for(var prop in arr[j]){
          if(obj[prop] === arr[j][prop]){
            obj[prop] = arr[j][prop];
          } else {
            obj[prop] = arr[j][prop];
          }
        }
      }
      return obj;
    }
    return extended(args);
  };

}).call(this);
