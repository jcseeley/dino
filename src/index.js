import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './js/dino.js';

$(document).ready(function() {
  let newDino = new Dino();
  $('#game').click(function() {
    newDino.dinoArray = [];
    newDino.blankArray = [];
    newDino.turnCount = 8;
    newDino.lettersGuessed = [];
    $("#showLetters").html(newDino.lettersGuessed);
    let promise = Dino.getWord();
    promise.then(function(response) {
      const data = JSON.parse(response);
      let myDino = data[0][0].toLowerCase().split("");
      myDino.forEach(function(letter) { 
        newDino.dinoArray.push(letter);
        newDino.blankArray.push(' _ ');
      });
      $("#showArray").html(newDino.blankArray);
      $("#showTurns").html(newDino.turnCount);
      $("#turns").show();
    }, function() {
      $('.showErrors').text(`There was an error processing your request`);
    });
  });

  $("#letter").click((event) => {
    event.preventDefault();
    let myVar = $("input").val();
    newDino.lettersGuessed.push(myVar + ', ');
    newDino.letterCheck(myVar);
    newDino.checkCount();
    $("#showArray").html(newDino.blankArray);
    $("#showTurns").html(newDino.turnCount);
    $("#showLetters").html(newDino.lettersGuessed);
    $("input").val("");
  });
});