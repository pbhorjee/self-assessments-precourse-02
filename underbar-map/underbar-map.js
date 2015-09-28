//var _ = {};
//
//(function() {
//
//
//  // Return the results of applying an iterator to each element.
//  _.map = function(collection, iterator) {
//    // map() is a useful primitive iteration function that works a lot
//    // like each(), but in addition to running the operation on all
//    // the members, it also maintains an array of results.
//  };
//
//}).call(this);
//

var _ = {a:"aaaa", b:"bbbb"};

_.each = function (collection, iterator) {
  if (typeof iterator !== 'function') { return; }

  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var o in collection) {
      iterator(collection[o], o, collection);
    }
  }
};

_.map = function (collection, iterator) {
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.
  var ret = [];

  _.each(collection, function (item) {
    ret.push(iterator(item))
  });

  return ret;
};