// Your code goes here
let body = document.querySelector("body");
body.style.backgroundColor = "#e74c3c";

let wrapper = document.querySelector(".wrapper");
let submit = document.querySelector("input[type='submit']");
let input = document.querySelector("input[type='text']");
let displaySection = document.querySelector(".display-profile");
let profileInput = "";

// wrapper.style.backgroundColor = "#c0392b";

let xhttp = new XMLHttpRequest();

submit.addEventListener('click', displayProfile);

function getProfile() {};
function displayProfile() {
    profileInput = input.value;
    xhttp.open('GET', `https://api.github.com/users/${profileInput}`);
    xhttp.send();
};

xhttp.onload = () => {
    let user = xhttp.response;
    console.log(user);
    let userParsed = JSON.parse(xhttp.response);
    displaySection.innerHTML = (`<h2>User Id: ${userParsed.login}</h2><p>Name: ${userParsed.name}</p><img src="${userParsed.avatar_url}">`);
};

xhttp.onerror = () => {
    alert("Quosh was the best!")
}