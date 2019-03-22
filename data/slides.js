// Slides



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
  return feature.properties.DOB_NAMESAKE == 1732;
};

var filter3 = function(feature) {
  return feature.properties.DOB_NAMESAKE == 1706;
};

var filter4 = function(feature) {
  return feature.properties.DOB_NAMESAKE == 1732;
};


// slide data
var slides = [{
    title: "Five Squares of Philadelphia",
    text1: "Philadelphia's central city was created in the 17th century following the plan by William Penn.",
    text2: "The city was laid out between current day South Street and Vine street and included five public squares. The squares were renamed in 1824:",
    pic: `       <ul>
                    <li>Northeast Square (Franklin Square)</li>
                    <li>Southeast Square (Washington Square) </li>
                    <li>Southwest Square (Rittenhouse Square)</li>
                    <li>Northwest Square (Logan Circle/Square)</li>
                    <li>Centre Square (Penn Square)</li>
                </ul>`,
    zoom: 14,
    pan: [39.9500, -75.1600],
    style: style0,
    filter: filter0
  },
  {
    title: "Logan Circle",
    text1: "James Logan (October 10, 1674 – October 31, 1751) was Philadelphia's 14th Mayor.",
    text2: "He was one of the founding trustees of the College of Philadelphia, the predecessor of the University of Pennsylvania.",
    pic: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/James_Logan_%28cropped%29.jpg/220px-James_Logan_%28cropped%29.jpg">`,
    zoom: 14,
    pan: [39.9579, -75.1707],
    style: style1,
    filter: filter1
  },
  {
    title: "Rittenhouse Square",
    text1: "David Rittenhouse (April 8, 1732 – June 26, 1796) was an American astronomer, inventor, clockmaker, mathematician, surveyor, scientific instrument craftsman, and public official.",
    text2: " Rittenhouse was a member of the American Philosophical Society and the first director of the United States Mint.",
    pic: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Charles_Willson_Peale_-_David_Rittenhouse_-_Google_Art_Project.jpg/220px-Charles_Willson_Peale_-_David_Rittenhouse_-_Google_Art_Project.jpg">`,
    zoom: 15,
    pan: [39.9494, -75.1719],
    style: style2,
    filter: filter2
  },
  {
    title: "Franklin Square",
    text1: "Benjamin Franklin (January 17, 1706 – April 17, 1790) was an American polymath and one of the Founding Fathers of the United States.",
    text2: "He was a leading author, printer, political theorist, politician, freemason, postmaster, scientist, inventor, humorist, civic activist, statesman, and diplomat.",
    pic: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg/220px-Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg">`,
    zoom: 15,
    pan: [39.9556, -75.1504],
    style: style3,
    filter: filter3
  },
  {
    title: "Washington Square",
    text1: "George Washington (February 22, 1732 – December 14, 1799) was an American political leader, military general, statesman, and Founding Father who also served as the first president of the United States from 1789 to 1797.",
    text2: "He has been called the 'Father of His Country' for his manifold leadership in the formative days of the new nation.",
    pic: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg">`,
    zoom: 15,
    pan: [39.946770, -75.152423],
    style: style4,
    filter: filter4
  }
];
