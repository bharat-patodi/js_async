// Your code goes here
let body = document.querySelector("body");
body.style.backgroundColor = "#e74c3c";

let wrapper = document.querySelector(".wrapper");
let submit = document.querySelector("input[type='submit']");
let input = document.querySelector("input[type='text']");
let displaySection = document.querySelector(".display-profile");
let profileInput = "";
let xhttp = new XMLHttpRequest();

submit.addEventListener('click', displayProfile);

// 2nd method using Promises and XMLHttpRequest

// function displayProfile() {
//     let newPromise = new Promise((resolve, reject) => {
//         profileInput = input.value;
//         xhttp.open('GET', `https://api.github.com/users/${profileInput}`);
//         xhttp.send();

//         xhttp.onload = () => {
//             let userParsed = JSON.parse(xhttp.response);
//             displaySection.innerHTML = (`<h2>User Id: ${userParsed.login}</h2><p>Name: ${userParsed.name}</p><img src="${userParsed.avatar_url}"><ul><li></li></ul>`);
//             resolve("User Found");
//         };
//         xhttp.onerror = () => {
//             alert("Quosh was the best!");
//             reject("User not Found");
//         }
//     });
//     return newPromise;
// }

// 3rd method using the fetch API
let follower_url = "";
let repo_url = "";
function displayProfile() {
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        displaySection.innerHTML = (`<h2>User Id: ${response.login}</h2><p>Name: ${response.name}</p><img src="${response.avatar_url}">`);
        follower_url = response.followers_url;
        repo_url = response.repos_url;
    }).then(() => {
        fetch(follower_url)
        .then(response => response.json())
        .then(response => {
            displaySection.innerHTML += `<section class="followers">Followers: <p>${response[0].login}</p><p>${response[1].login}</p><p>${response[2].login}</p><p>${response[3].login}</p><p>${response[4].login}</p></section>`;

        })}
    ).then(() => {
        fetch(repo_url)
        .then(response => response.json())
        .then(response => {
            displaySection.innerHTML += `<section class="followers">Repos: <p>${response[0].name}</p><p>${response[1].name}</p><p>${response[2].name}</p><p>${response[3].name}</p><p>${response[4].name}</p></section>`;
        })}
    )
}