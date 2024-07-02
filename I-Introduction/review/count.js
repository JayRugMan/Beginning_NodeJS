
if (typeof window === 'undefined') {const os = require('os');}

function count_console() {
  for (i = 0; i < 10; i++) {
    console.count();
  }
}

function get_mem() {
  console.log(`Free Memory: ${os.freemem()} bytes, or ${os.freemem()/1024} kilobytes, or ${os.freemem()/1024/1024} megabytes, or ${os.freemem()/1024/1024/1024} gigabytes`);
}

// Make it work with node without breaking it in a browser
if (typeof window === 'undefined') {module.exports.count_console = count_console; module.exports.get_mem = get_mem;}
