// Challenge 1

function sayHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
})
promise.then(() => {
  console.log(promise);
});

// Should print out "Resolved!"
console.log(promise);


// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject("Rejected!")
});
promise.catch(console.log(promise));

// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!));
// console.log("I'm not the promise!");
// This is async code. This is why, the async part will be put in the callback queue and will stay there till the call stack gets empty.


// Challenge 5
function delay(){
	let newPromise = new Promise(function(resolve, reject) {
    return   setTimeout(() => {
    resolve();
  }, 3000);
  });
  return newPromise;
}


// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
// ADD CODE BELOW
var secondPromise = new Promise((resolve, reject) => resolve("Second!"));
var firstPromise = new Promise((resolve, reject) => resolve(`secondPromise`));

firstPromise.then(() => secondPromise).then(console.log(firstPromise));


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  return Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then((resultOfPromiseAll) => console.log(resultOfPromiseAll));
}