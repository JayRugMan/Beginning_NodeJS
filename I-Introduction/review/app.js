// The console and process modules are global and don't need to be required to use!
const os = require('os');
const util = require('util');

// Use console.count() to log how many times a function is called.
console.count();
console.log("hello, world");
console.count();
console.count();
console.log("one");
console.log("two");
console.log("three");
console.count();

// Use process.emitWarning() to create and log a custom warning message to the terminal.
//var today = new Date();
//var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
//console.log(`Time: ${time}`);
if (new Date().getSeconds() % 7 === 0) {  // evals true every second that is divisible by 7
  const warning = 'You loose time roulette';
  process.emitWarning(warning);
}

// Use os.freemem() to check how much free system memory is available in the learning environment.
console.log(`Free Memory: ${os.freemem()} bytes, or ${os.freemem()/1024} kilobytes, or ${os.freemem()/1024/1024} megabytes, or ${os.freemem()/1024/1024/1024} gigabytes`);

// Use util.format() to log a formatted object to the terminal.