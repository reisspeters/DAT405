
var api = 'http://magicseaweed.com/api/';
var apiKey = 'dc1e6f1453e32e6c0fe43e5a22c5c128';
var forecast = '/forecast/?spot_id=1352';

function setup() {
  //createCanvas(1280, 720);
  noCanvas();

var button = select('#submit');
button.mousePressed(FitralAsk);
}

//input = select('#giphsearch');

//var url = api + apiKey + input.value() ;
//loadJSON(url, gotData);


function giphAsk() {
var url = api + apiKey + forecast ;
loadJSON(url, gotData);
}

function gotData(swl) {
createImg(swl.1.swell);
}
