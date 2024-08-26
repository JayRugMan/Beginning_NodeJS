const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
})

// per course
//const printData = (data) => {
//  console.log(`Item: ${data}`);
//};
//
//myInterface.on('line', printData);

// Simpler way
myInterface.on('line', (fileLine) => {
  console.log(`Item: ${fileLine}`);
})