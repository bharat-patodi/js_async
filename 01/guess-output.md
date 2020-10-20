Guess the output of the codes below :-

1.

```js
function sayHello() {
  console.log("Hey You Called Me");
}
setTimeout(sayHello, 1000);

console.log("Hey You!");
```

output
Hey You!
Hey You Called Me

2.

```js
function sayHello() {
  console.log("Hey You Called Me");
}

setTimeout(sayHello, 0);

console.log("Hey You!");
```

output
Hey You!
Hey You Called Me

3.

```js
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```

output
A
C
B

4.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}
main();
```

output
A
C (after 3 seconds)
B

5. Look at the output of the code below to understand hwo things are happening.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log("A", Date.now() - current);
  setTimeout(function exec() {
    console.log("B", Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log("C", Date.now() - current);
}

main();
```

Output explanantion -
When the main function is called in line 98, the JS interpreter will go in the main function's execution context.
line 89 - creates a new `current` variable
this actually finishes the declaration phase and the function then moves in the execution phase -
line 89 - current is assigned a new current time value (a new exec context is created for the now method on Date object)
line 90 - "A" is logged to console. with the time taken to execute it >> A 0
line 91 - setTimeout is sent to the browser API where it is held while the call stack is emptied.
line 94 - A while loop runs for 3 seconds
line 95 - C 3001 is logged to the console
Finally, since the call stack is emptied, the event loop will pick the function from the web API and place it in the call stack where its execution will begin. Since the time 1000ms is already past, it will simply output to the console B 3003 without any further wait.
