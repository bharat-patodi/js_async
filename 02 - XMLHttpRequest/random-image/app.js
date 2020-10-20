let body = document.querySelector("body");
body.style.backgroundColor = "#ddd";

let wrapper = document.querySelector(".wrapper");
let displaySection = document.querySelector(".display-section");
let submit = document.querySelector("input");

// wrapper.style.backgroundColor = "#c0392b";

let xhttp = new XMLHttpRequest();

submit.addEventListener('click', displayImage);

function displayImage() {
    xhttp.open('GET', `https://api.unsplash.com/photos/random/?client_id=xhD5sNxcCBe09Fun2jGNRq1g1sMHjNvVCl1z4JaK7Hs`);
    xhttp.send();
    xhttp.onload = () => {
        let user = xhttp.response;
        console.log(user);
        let userParsed = JSON.parse(xhttp.response);
        console.log(userParsed.urls.small);
        displaySection.innerHTML = (`<img src="${userParsed.urls.small}">`);
    };

    xhttp.onerror = () => {
        alert("Quosh was the best!");
    }
};
