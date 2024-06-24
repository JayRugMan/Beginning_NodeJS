# The Node REPL

> REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.  

## Theirs

```JavaScript
$ node
Welcome to Node.js v14.19.1.
Type ".help" for more information.
> let newArg = 3;
undefined
> console.log(newArg);
3
undefined
> global
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
> Object.keys(global);
[
  'global',
  'clearInterval',
  'clearTimeout',
  'setInterval',
  'setTimeout',
  'queueMicrotask',
  'clearImmediate',
  'setImmediate'
]
> 
> 
> global['cat'] = 'meow!';
'meow!'
> Object.keys(global);
[
  'global',
  'clearInterval',
  'clearTimeout',
  'setInterval',
  'setTimeout',
  'queueMicrotask',
  'clearImmediate',
  'setImmediate',
  'cat'
]
> console.log(global.cat0
... 
> console.log(global.cat)
meow!
undefined
> window.alert("Broken");
Uncaught ReferenceError: window is not defined
> 
```

## Mine

```Javascript
$ node
Welcome to Node.js v12.22.9.
Type ".help" for more information.
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
const me = {name: "Jason Hardman", age: 39, residence: "Earth"};

console.log(`Hi, I'm ${me.name}. I'm ${me.age} and live on ${me.residence}.`);

Hi, I'm Jason Hardman. I'm 39 and live on Earth.
undefined
> console.log{me}
console.log{me}
           ^

Uncaught SyntaxError: Unexpected token '{'
> console.log(me);
{ name: 'Jason Hardman', age: 39, residence: 'Earth' }
undefined
> 
> 
> 
> global
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  }
}
> Object.keys(global);
[
  'global',
  'clearInterval',
  'clearTimeout',
  'setInterval',
  'setTimeout',
  'queueMicrotask',
  'clearImmediate',
  'setImmediate'
]
> 
> 
> global['cat'] = 'meow!';
'meow!'
> Object.keys(global);
[
  'global',
  'clearInterval',
  'clearTimeout',
  'setInterval',
  'setTimeout',
  'queueMicrotask',
  'clearImmediate',
  'setImmediate',
  'cat'
]
> console.log(global.cat)
meow!
undefined
> window.alert("Broken");
Uncaught ReferenceError: window is not defined
>
```
