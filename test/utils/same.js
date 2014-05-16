var _ = require('lodash');
var assert = require('chai').assert;

var convertToHex = function (colors) {
  if (_.isObject(colors)) {
    colors = _.clone(colors);
    for (var key in colors) {
      if (colors.hasOwnProperty(key)) {
        colors[key] = colors[key].toHexString();
      }
    }
    return colors;
  }
  
  if (_.isArray(colors)) {
    return _.map(colors, function (color) {
      return color.toHexString();
    });
  }
  
  if (colors.toHexString) { 
    return colors.toHexString();
  } 

  return colors;
};

module.exports = function (expected, actual) {
  actual = convertToHex(actual);
  expected = convertToHex(expected);
  return assert.deepEqual(expected, actual);
};