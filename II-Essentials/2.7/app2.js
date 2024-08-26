// With some help from Microsoft's CoPilot

const readline = require('readline');
const fs = require('fs');

const items = [];
const bItems = [];
let preLine = null;

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

myInterface.on('line', (fileLine) => {
  items.push(`Item: ${fileLine}`);
  if (fileLine.startsWith("b")) {
    if (preLine) {
      bItems.push(`line before ${fileLine}: ${preLine}`);
    } else {
      bItems.push(`No line before ${fileLine}`);
    }
  }
  preLine = fileLine;
});

myInterface.on('close', () => {
  console.log('The whole list:');
  items.forEach(item => console.log(item));
});

myInterface.on('close', () => {
  console.log(`\nOnly 'b's and lines before:`);
  bItems.forEach(item => console.log(item));
})
