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

_.memoize = function (func) {
  var results = {};
  return function() {
    var strArgs = JSON.stringify(arguments);
    if (!results[strArgs]) {
      results[strArgs] = func.apply(this, arguments);
    }
    return results[strArgs];
  }
}