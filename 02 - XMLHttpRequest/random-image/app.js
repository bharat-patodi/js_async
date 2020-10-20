let body = document.querySelector("body");
body.style.backgroundColor = "#ddd";

let wrapper = document.querySelector(".wrapper");
let displaySection = document.querySelector(".display-profile");
let profileInput = "";

// wrapper.style.backgroundColor = "#c0392b";

let xhttp = new XMLHttpRequest();

submit.addEventListener('click', displayImage);

function displayImage() {
    profileInput = input.value;
    xhttp.open('GET', `https://api.github.com/users/${profileInput}`);
    xhttp.send();
};

xhttp.onload = () => {
    let user = xhttp.response;
    console.log(user);
    let userParsed = JSON.parse(xhttp.response);
    displaySection.innerHTML = (`<p>User Id: ${userParsed.login}</p><p>Name: ${userParsed.name}</p><img src="${userParsed.avatar_url}">`);
};

xhttp.onerror = () => {
    alert("Quosh was the best!");
}