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
      console.log(newDino.dinoArray);
      console.log(newDino.blankArray);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });

  $("#letter").click((event) => {
    event.preventDefault();
    let myVar = $("input").val();
    newDino.letterCheck(myVar);
    newDino.checkCount();
    $("#showArray").html(newDino.blankArray);
    $("#showTurns").html(newDino.turnCount);
    console.log(newDino.dinoArray);
    console.log(newDino.blankArray);
  });
});

