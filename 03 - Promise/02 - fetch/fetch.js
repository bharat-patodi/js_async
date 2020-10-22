// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)

function fetchData(verb, url) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open(verb, url);
    xhttp.send();
    xhttp.onload = () => {
      resolve("Done");
    };
    xhttp.onerror = () => {
      reject("Error");
    }
  });
}
