document.addEventListener("DOMContentLoaded", function() {
let body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = "dimgray"

let resultContainer = document.createElement('div');
resultContainer.style.height = "60vh"
resultContainer.style.width = "40vw"
resultContainer.style.backgroundColor = "black";

//this is our input element 
let input = document.createElement("input");
input.type = "text"
input.id = "searchInput"
body.appendChild(input);

//function that creates a button and adds an eventlistener so when the button is pressed it will send a request to the API with the provided anime name(input)
//also takes the value of the input and stores it in a variable called searchQuery
function buttonSearch() {
let button = document.createElement("button");
button.textContent = "search";
// console.log(searchQuery)
//the searchQuery needs to be within the eventlistener in order for the event to fire and retrieve data that corresponds with the user's input
button.addEventListener("click", function() {
let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/anime?q=" + searchQuery, myResults)
})


body.appendChild(button)}
buttonSearch();

function myResults(data) {
console.log(data);



}



});
