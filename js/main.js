/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [39.95, -75.16],
  zoom: 14
});
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var url = 'https://raw.githubusercontent.com/MUSA611-CPLN692-spring2019/cpln692-week7/master/labs/lab1/squaresPoly.geojson';
var jsondata;
$.ajax(url).done(function(res) {
  jsondata = JSON.parse(res);
  buildSlide(slides[currentSlide]);
});

var currentSlide = 0;


// Map setview function
var setView = (pan, zoom) => {
  map.setView(pan, zoom);
};


var layer;
createLayer = (filterFunc, styleFunc) => {
  layer = L.geoJSON(jsondata, {
    filter: filterFunc,
    style: styleFunc
  });
};

var clearLayer = () => {
  if (layer) {
    map.removeLayer(layer);
  }
};

var addData = () => {
  layer.addTo(map);
};




// adding text to slides

// add title
var addText = (slideObject) => {
  $('#slide-title').text(slideObject.title);
  $('#slide-p1').text(slideObject.text1);
  $('#slide-p2').text(slideObject.text2);
  $('#slide-pic').html(slideObject.pic);
};




var buildSlide = (slideObject) => {
  clearLayer();
  setView(slideObject.pan, slideObject.zoom);
  createLayer(slideObject.filter, slideObject.style);
  addData();
  addText(slideObject)
};


// Button functions

// check to see if should hide buttons
var hideButtonCheck = () => {
  if (currentSlide == 0) {
    $("#back").css("visibility", "hidden");
  } else if (currentSlide == (slides.length - 1)) {
    $("#next").css("visibility", "hidden");
  } else {
    $("#back").css("visibility", "visible");
    $("#next").css("visibility", "visible");
  }
};

hideButtonCheck();

$("#next").click(() => {
  currentSlide = currentSlide + 1;
  console.log("slide " + currentSlide);
  buildSlide(slides[currentSlide]);
  hideButtonCheck();
});

$("#back").click(() => {
  currentSlide = currentSlide - 1;
  console.log("slide " + currentSlide);
  buildSlide(slides[currentSlide]);
  hideButtonCheck();
});
