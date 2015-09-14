var _ = {};

(function() {


    // Produce a duplicate-free version of the array.
    _.uniq = function(array) {

        var item,
            res = [],
            i;

        var contains = function(collection, target) {
            var i,
                item;

            for (i = 0; i < collection.length; i++) {
                item = collection[i];
                if (item === target) {
                    return true;
                }
            }
            return false;
        };

        for (i = 0; i < array.length; i++) {
            item = array[i];
            if(!contains(res, item)){
              res.push(item);
            }
        }
        return res;
    };

}).call(this);