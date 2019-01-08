
var api = 'http://api.giphy.com/v1/gifs/trending?';
var apiKey = '&api_key=qBY3mPO8JxjgmOO9DPpm18G9qBEw5VgZ';

function setup() {
  createCanvas(1280, 720);
  background(220);
  var url = api + apiKey ;
  loadJSON(url, gotData);

  var button = select('#submit');
  button.style('font-size', '30px');
  button.position(width/2-100, 100);
  button.mousePressed(giphAsk);
}

function giphAsk() {
  var url = api + apiKey ;
  loadJSON(url, gotData);
}

function gotData(giphy){
  var randImgNum = Math.floor(random(giphy.data.length));
  createImg(giphy.data[randImgNum].images.original.url);
}
  //how to empty buffer createImg
