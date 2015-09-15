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
   var each = function(list, iterator){
  if(list.constructor === Array){
    for(var i = 0; i < list.length; i++){
      var index = i;
      iterator(list[i], index, list);
    }
  }
  if(list.constructor === Object){
    for(var key in list){
      iterator(list[key], key, list);
    }
  }
};
    each(elements, function(otherObjs){
      for(var key in otherObjs){
        obj[key] = otherObjs[key];
      }
    });
    return obj;
  };

}).call(this);
