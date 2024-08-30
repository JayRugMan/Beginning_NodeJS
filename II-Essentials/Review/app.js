// Create two buffers
const firstName = Buffer.from("Jason R. ");
const lastName = Buffer.from("Hardman");

// Join them together
let nameArray = [firstName, lastName];
const fullNameBuffer = Buffer.concat(nameArray);

// Convert them to a string
let fullNameString = fullNameBuffer.toString();

// Log the results after 3 seconds
setTimeout(() => {
  console.log(fullNameString);
}, 3000);
