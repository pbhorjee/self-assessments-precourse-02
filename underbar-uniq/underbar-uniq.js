var _ = {};

(function () {

    _.each = function (collection, action) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                action(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                action(collection[key], key, collection);
            }
        }
    };

    _.contains = function (collection, queryItem) {
        var result = false;
        _.each(collection, function (item) {
            if (item === queryItem) {
                result = true;
            }
        });
        return result;
    };
    // Produce a duplicate-free version of the array.
    _.uniq = function (array) {
        var uniqueElemets = [];
        _.each(array, function (item) {
            if (!_.contains(uniqueElemets, item)) {
                uniqueElemets.push(item);
            }
        });
        return uniqueElemets;
    };

}).call(this);
