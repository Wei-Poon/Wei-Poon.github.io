$(document).ready(function(){

var word1 = [
	"the creak of a door",
	"a thunderous roar",
	"a subtle chime",
	"the restless winds",
	"a soothing melody"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "the raging masses",
  "the lifeless streets",
  "a blank stare",
  "the bustling city",
  "unending reflections"

];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "crimson, filled with smoke",
  "empty, no clouds or stars",
  "on fire",
  "below you",
  "falling"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];


var word4 = [
  "Welcome to the Afterlife",
  "Your journey begins here",
  "Your life is in danger",
  "Perhaps this is just a dream",
  "..."
];

var randomWord4 = word4[Math.floor(Math.random()*word4.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);

});