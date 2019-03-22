

// Slide styles
var style0 = {};

var style1 = {
  "color": "red",
};
var style2 = {
  "color": "yellow",
};
var style3 = {
  "color": "purple",
};

var style4 = {
  "color": "blue",
};

// Slide filters
var filter0 = function(feature) {
  return feature
};

var filter1 = function(feature) {
  return feature.properties.DOB_NAMESAKE == 1674;
};

var filter2 = function(feature) {
  return feature.properties["NAME"] == "Rittenhouse Square";
};

var filter3 = function(feature) {
  return feature.properties.DOB_NAMESAKE == 1706;
};

var filter4 = function(feature) {
  return feature.properties["NAME"] == "Washington Square";
};
