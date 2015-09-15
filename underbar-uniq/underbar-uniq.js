var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  var i;
  var unique = [];
  var logged = [array[0]];

  for (i = 0; i < array.length; i++){
    if (_.contains(unique, array[i])=== false){
      unique.push(array[i]);
    }
      logged.push(array[i]);
    }
    return unique;
  };

}).call(this);
