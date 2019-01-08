
var api = 'http://magicseaweed.com/api/';
var apiKey = 'dc1e6f1453e32e6c0fe43e5a22c5c128';
var forecast = '/forecast/?spot_id=1';

function setup() {
  createCanvas(1280, 720);

var button = select('#submit');
button.mousePressed(FistralAsk);
}

function FistralAsk() {
var url = api + apiKey + forecast ;
loadJSON(url);
