var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {

var result =[];
    _.each(array, function(val){
      if(_.indexOf(result,val) === -1)
        result.push(val);
    })
    return result;








  }

}).call(this);
