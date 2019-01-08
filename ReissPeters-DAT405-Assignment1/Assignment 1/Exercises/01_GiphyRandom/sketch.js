var img;
var api = 'http://api.giphy.com/v1/gifs/random?';
var apiKey = '&api_key=qBY3mPO8JxjgmOO9DPpm18G9qBEw5VgZ';

function setup() {
  createCanvas(1280, 720);
  img = createImg();
  img.position(0,0);

  var url = api + apiKey ;
  loadJSON(url, gotData);

  var button = select('#submit');
  button.mousePressed(giphAsk);
}


function giphAsk() {
  var url = api + apiKey ;
  loadJSON(url, gotData);
}

function draw() {
  background(220);
}

function gotData(giphy){
createImg(giphy.data.images.original.url);
