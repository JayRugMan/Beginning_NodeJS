const readline = require('readline');
const fs = require('fs');

const fileStream = fs.createWriteStream('shoppingResults.txt');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

let transformData = (line) => fileStream.write(`They were out of: ${line}\n`);

myInterface.on('line', printData);
myInterface.on('line', transformData);

