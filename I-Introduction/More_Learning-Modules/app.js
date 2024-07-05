/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
const areaFunctions = require('./shape-area.js');

// Option 2: import circleArea and squareArea with object destructuring
const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = areaFunctions.circleArea(radius);

const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(`A circle with a radius of ${radius} units has an area of ${areaOfCircle} units.`);
console.log(`A Square with a side legth of ${sideLength} units has an area of ${areaOfSquare} units.`);

console.log(`A circle with a radius of ${radius} units has an area of ${circleArea(radius)} units.`);
console.log(`A Square with a side legth of ${sideLength} units has an area of ${squareArea(sideLength)} units.`);
