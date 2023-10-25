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
buttonSearch();

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



function myResults(showData) {
// console.log(jikanData);
let animeData = showData.data
console.log(animeData)

animeData.forEach((anime) => {
    
    let resultContainer = document.createElement('div');
resultContainer.style.height = "40vh"
resultContainer.style.width = "40vw"
resultContainer.style.display = 'flex'
resultContainer.style.flexWrap = 'wrap'
// resultContainer.style.backgroundColor = "black";
// resultContainer.style.overflow = "scroll";
body.appendChild(resultContainer);

    // console.log(anime.title)
    let span = document.createElement("span");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "white"
    span.style.display = "inline-block"; 
    span.style.position = "relative"; 
    span.style.border = "2px solid #000"
resultContainer.appendChild(span);


let h2 = document.createElement("h2");
 h2.textContent = anime.title;
span.appendChild(h2);

span.addEventListener("mouseenter", function() {
    $(p).show();
    $(h4).show()
    $(img).hide();
    $(h2).hide();

})
span.addEventListener("mouseleave", function() {
    $(p).hide();
    $(h4).hide();
    $(img).show();
    $(h2).show();
})


let div = document.createElement("div");
div.className = "synopsis-box"
span.appendChild(div);


let h4 = document.createElement("h4");
h4.textContent = "Synopsis";
div.appendChild(h4)
$(h4).hide();


let p = document.createElement("p");
p.textContent = anime.synopsis;
// console.log(anime.synopsis)
div.appendChild(p);
$("p").hide()


let img = document.createElement("img");
img.src = anime.images.jpg.image_url;
// console.log(anime.images.jpg)
span.appendChild(img)


})

}

let charButton = document.createElement("button");
charButton.textContent = "Characters";
body.appendChild(charButton);
charButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/characters?q=" + searchQuery, getChar)
})

function getChar(charData) {
console.log(charData)
let animeChar = charData.data;
animeChar.forEach((character) => { 
    let charContainer = document.createElement('div');
    charContainer.style.height = "40vh"
    charContainer.style.width = "40vw"
    charContainer.style.display = 'flex'
    charContainer.style.flexWrap = 'wrap'
body.appendChild(charContainer);

let span = document.createElement("span");
span.className = "card";
span.style.height = "40vh"
span.style.width = "40vw";
span.style.margin = "auto"
span.style.backgroundColor = "white"
span.style.display = "inline-block"; 
span.style.position = "relative"; 
span.style.border = "2px solid #000"
charContainer.appendChild(span);

let h2 = document.createElement("h2");
 h2.textContent = character.name;
span.appendChild(h2);

let img = document.createElement("img");
img.src = character.images.jpg.image_url;
// console.log(character.images.jpg)
span.appendChild(img)
}) 
}


let mangaButton = document.createElement("button");
mangaButton.textContent = "Manga";
body.appendChild(mangaButton);

mangaButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/manga?q=" + searchQuery, getManga)
})
function getManga(mangaData) {
console.log(mangaData)
let mangaData2 = mangaData.data;
mangaData2.forEach((manga) => {
    let mangaContainer = document.createElement('div');
    mangaContainer.style.height = "40vh"
    mangaContainer.style.width = "40vw"
    mangaContainer.style.display = 'flex'
    mangaContainer.style.flexWrap = 'wrap'
body.appendChild(mangaContainer);

let span = document.createElement("span");
span.className = "card";
span.style.height = "40vh"
span.style.width = "40vw";
span.style.margin = "auto"
span.style.backgroundColor = "white"
span.style.display = "inline-block"; 
span.style.position = "relative"; 
span.style.border = "2px solid #000"
mangaContainer.appendChild(span);

let h2 = document.createElement("h2");
 h2.textContent = manga.title;
span.appendChild(h2);

let img = document.createElement("img");
img.src = manga.images.jpg.image_url;
// console.log(character.images.jpg)
span.appendChild(img)
})
}

let magazineButton = document.createElement("button");
magazineButton.textContent = "Magazine";
body.appendChild(magazineButton);

magazineButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/magazines?q=" + searchQuery, getMag);
})

function getMag(magData) {
    console.log(magData)
    let magazineData = magData.data
    magazineData.forEach((magazine) => {
        let magazineContainer = document.createElement('div');
        magazineContainer.style.height = "40vh"
        magazineContainer.style.width = "40vw"
        magazineContainer.style.display = 'flex'
        magazineContainer.style.flexWrap = 'wrap'
    body.appendChild(magazineContainer);
    
    let span = document.createElement("span");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "white"
    span.style.display = "inline-block"; 
    span.style.position = "relative"; 
    span.style.border = "2px solid #000"
    magazineContainer.appendChild(span);
    
    let a = document.createElement("a");
    a.href = magazine.url;
    
    
    let h2 = document.createElement("h2");
     h2.textContent = magazine.name;
    span.appendChild(h2);

    

    
    
    })
}
});

