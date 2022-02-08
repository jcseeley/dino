import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './js/dino.js';

$(document).ready(function() {
  $('#game').click(function() {
    $(".blankSpaces").empty();
    let promise = Dino.getWord();
    
    promise.then(function(response) {
      let myArray = [];
      const data = JSON.parse(response);
      let myDino = data[0][0].split("");
      myDino.forEach(function() {
        $(".blankSpaces").append('<li>' + "_ " + '</li>'); 
        myArray.push("_");
      });
      console.log(myDino);
      console.log(myArray);
      return myDino;
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

