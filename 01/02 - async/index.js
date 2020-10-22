/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

testMe(); // what order should these log out? Howdy or Partnah first?

// It should first log to the console "Partnah", then run sayHowdy function and log "Howdy"

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  greet = function() {
    console.log("welcome");
  };
  setTimeout(greet, 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  goodBye = function() {
    console.log("good bye");
  }
  setTimeout(goodBye, 3000);
  console.log("hello");
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => {
    console.log("hi again");
  }, 1000);
}

// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

// using a while loop
function limitedRepeat() {
  // ADD CODE HERE
  let counter = 1000;
  while(counter <= 5000) {
    counter = counter + 1000;
    setTimeout(() => {
      console.log('hi for now');
    }, counter);
  };
};

// Using clearInterval()

function limitedRepeat() {
  let msg = setInterval(() => console.log('hi for now'), 1000);
  setTimeout(() => {clearInterval(msg)}, 6000);
}

// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

// Using a while loop
function everyXsecsForYsecs(cb, interval, duration) {
  // ADD CODE HERE
  interval *= 1000;
  duration *= 1000;
  let i = interval;
  while(interval <= duration) {
    setTimeout(cb, interval);
    interval += i;
  }
}

// Using clearInterval
function everyXsecsForYsecs(cb, interval, duration) {
  interval *= 1000;
  duration *= 1000;
  let action = setInterval(cb, interval);
  setTimeout(() => clearInterval(action), duration + interval);
}

// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
