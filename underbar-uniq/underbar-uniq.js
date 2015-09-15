var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  	var copyArr = array.slice(0);
  	var uniqArr = [];

  	for (var i = 0; i < copyArr.length; i++) {
  		var duplicate = false;

  		for (var j = 0; j < uniqArr.length; j++) {
  			if (copyArr[i] == uniqArr[j]) {
  				duplicate = true;
  			}
  		}

  		if (!duplicate) {
  			uniqArr.push(copyArr[i]);
  		}
  	}

  	return uniqArr;
  };

}).call(this);
