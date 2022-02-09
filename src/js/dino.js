export default class Dino {  
  constructor() {
    this.dinoArray = [];
    this.blankArray = [];
    this.turnCount = 8;
  }

  letterCheck(myVar) {
    if (this.dinoArray.includes(myVar)) {
      this.dinoArray.forEach((letter, i) => {
        if (this.dinoArray[i].includes(myVar)) {
          this.blankArray.splice(i, 1, myVar);
        }
      });
    } else {
      this.turnCount --;
      console.log(this.turnCount);
    }
  }

  checkCount() {
    if (this.turnCount === 0) {
      alert("GAME OVER!");
    }
  }
    
  static getWord() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}