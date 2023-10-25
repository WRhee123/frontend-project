document.addEventListener("DOMContentLoaded", function() {
let body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = "dimgray"


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

function myResults(jikanData) {
// console.log(jikanData);
let animeData = jikanData.data
console.log(animeData)

animeData.forEach((anime) => {
    let resultContainer = document.createElement('div');
resultContainer.style.height = "60vh"
resultContainer.style.width = "40vw"
resultContainer.style.display = 'flex'
resultContainer.style.flexWrap = 'wrap'
// resultContainer.style.backgroundColor = "black";
resultContainer.style.overflow = "scroll";
body.appendChild(resultContainer);

    console.log(anime.title)
    let span = document.createElement("span");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "white"
resultContainer.appendChild(span);


let h2 = document.createElement("h2");
 h2.textContent = anime.title;
span.appendChild(h2);




let div = document.createElement("div");
div.className = "synopsis-box"
span.appendChild(div);


let h4 = document.createElement("h4");
h4.textContent = "Synopsis";
div.appendChild(h4)


let p = document.createElement("p");
p.textContent = anime.synopsis;
// console.log(anime.synopsis)
div.appendChild(p);


let img = document.createElement("img");
img.src = anime.images.jpg.small;
console.log(anime.images.jpg)
span.appendChild(img)


})

}



});
