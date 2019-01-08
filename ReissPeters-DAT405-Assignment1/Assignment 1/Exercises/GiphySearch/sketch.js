
var api = 'http://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=qBY3mPO8JxjgmOO9DPpm18G9qBEw5VgZ';
var input =

function setup() {
  //createCanvas(1280, 720);
  noCanvas();

var button = select('#submit');
button.mousePressed(giphAsk);
}

//input = select('#giphsearch');

//var url = api + apiKey + input.value() ;
//loadJSON(url, gotData);


function giphAsk() {
var url = api + apiKey + input.value() ;
loadJSON(url, gotData);

}

function gotData(giphy){
createImg(giphy.data[0].images.original.url);
}
