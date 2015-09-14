var _ = {};

(function() {


    // Return the results of applying an iterator to each element.
    _.map = function(collection, iterator) {
        // map() is a useful primitive iteration function that works a lot
        // like each(), but in addition to running the operation on all
        // the members, it also maintains an array of results.

        var i,
            item,
            prop,
            res;

        // Collection is an Array
        if (Array.isArray(collection)) {
            res = [];
            for (i = 0; i < collection.length; i++) {
                item = collection[i];
                res.push(iterator(item, i, collection));
            }
        // Collection is an Object
        } else {
          res = {};
          for(prop in collection){
            item = collection[prop];
            res[prop] = iterator(item, prop, collection);
          }
        }

        return res;
    };

}).call(this);