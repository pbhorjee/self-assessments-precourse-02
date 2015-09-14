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
    var args = arguments,
        i,
        prop;

    for(i = 1; i < args.length; i++){
      for(prop in args[i]){
        if(!obj[prop]){
          obj[prop] = args[i][prop];
        }
      }
    }
    return obj;
  };

}).call(this);