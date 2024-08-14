const fs = require('fs');

const callBack = (err, data) => {
  if (err) {
    console.log(`Looks like fertilizer hit the ventilator!\n${err}\n`);
  } else {
    console.log(`${data}`);
  }
}

//fs.readFile('./blah.txt', 'utf-8', callBack)
//fs.readFile('./fileOne.txt', 'utf-8', callBack)
//fs.readFile('./anotherFile.txt', 'utf-8', callBack)
fs.readFile('./finalFile.txt', 'utf-8', callBack)

let secretWord = "cheeseburgerpizzabagels";