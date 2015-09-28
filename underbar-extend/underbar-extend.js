var _ = {};

_.extend = function (obj) {
  var args = Array.prototype.slice.call(arguments, 1);

  _.each(args, function (object) {
    _.each(object, function (value, key) {
      obj[key] = value;
    });
  });

  return obj;
};

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
