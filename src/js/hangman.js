("#letter").click(() => {
  let myArray = ["d", "i", "n", "o", "s", "a", "u", "r", "u", "s"];
  let newArray = [];
  let myVar = $("input").val();
  console.log(myVar);
  myArray.forEach((letter, i) => {
    if (myArray[i].includes(myVar)) {
      newArray.push(myVar);
    } else {
    newArray.push("_")
    }
  })
console.log(newArray);
})



// let myArray = ["d", "i", "n", "o", "s", "a", "u", "r", "u", "s"]
// let newArray = [];

// myArray.forEach((letter, i) => {
//   if (myArray[i].includes("s")) {
//     newArray.push("s");
//   } else {
//   newArray.push("_")
//   }
// })
// console.log(newArray);



// myDino.forEach(function(letter) {
//   $(".blankSpaces").append('<li>' + "_ " + '</li>'); 
//   myArray.push("_");
//   dinoLetters.push(letter);


// submit guess 
// if myDino.includes(input.val) and myArray[i] === "_", myDino.replace(input.val)
//   appear method at letter location  

// let myVar = input.val

// let regex = '/${myVar}/gi'

// const arr = ['a', 'b', 'c', 'a', 'a'];

// for (let index = 0; index < myDino.length; index++) {
//   if (arr[index] === 'a') {
//     arr[index] = 'z';
//   }
// }

// console.log(arr); // 👉️ ['z', 'b', 'c']