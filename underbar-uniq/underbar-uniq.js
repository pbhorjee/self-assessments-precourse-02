var _ = {};


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


_.uniq = function (array) {
  var ret = [];

  _.each(array, function (item) {
    var found = false;
    for (var x = 0; x < ret.length; x++) {
      if (ret[x] === item) {
        found = true;
        break;
      }
    }
    if (!found) {
      ret.push(item);
    }
  });

  return ret;
};