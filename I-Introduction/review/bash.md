# Introduction Review

## Theirs

```javaScript
$ node
Welcome to Node.js v14.19.1.
Type ".help" for more information.
> console.log('test')
test
undefined
> console.count()
default: 1
undefined
> console.log('test')
test
undefined
> console.count()
default: 2
undefined
> 
...
$ node -e "require('./test/count.js').count_console(); require('./test/count.js').get_mem();"
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10
$ node -e "require('./test/count.js').get_mem();"
Free Memory: 36649132032 bytes, or 35790168 kilobytes, or 34951.3359375 megabytes, or 34.132164001464844 gigabytes
$
```

## Mine

```JavaScript
 review   main  node                    
Welcome to Node.js v12.22.9.
Type ".help" for more information.
> console.count()
default: 1
undefined
> console.count()
default: 2
undefined
> console.count()
default: 3
undefined
> console.read("hello, world")
Uncaught TypeError: console.read is not a function
> console.log("hello, world")
hello, world
undefined
> console.count()
default: 4
undefined
> 
...
node -e "for(let i = 0; i < 3; i++) {require('./count.js').count_console();}; require('./count.js').get_mem();"
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10
default: 11
default: 12
default: 13
default: 14
default: 15
default: 16
default: 17
default: 18
default: 19
default: 20
default: 21
default: 22
default: 23
default: 24
default: 25
default: 26
default: 27
default: 28
default: 29
default: 30
Free Memory: 5121691648 bytes, or 5001652 kilobytes, or 4884.42578125 megabytes, or 4.769706726074219 gigabytes
```
