// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const caesarNum = 14
const encodeMessage = (str) => {
  // Use the encryptor functions here.
  str = caesarCipher(str, caesarNum);
  str = reverseCipher(str);
  str = symbolCipher(str);
  return str;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  str = symbolCipher(str);
  str = reverseCipher(str);
  str = caesarCipher(str, (26 - caesarNum));
  return str;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);