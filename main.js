document.addEventListener("DOMContentLoaded", function() {
let body = document.getElementsByTagName('body')[0]
// body.style.backgroundColor = "#233142"
body.style.backgroundImage = 'url("sky.png")';
body.style.backgroundSize = "initial"


let searchBar = document.createElement("div");
searchBar.style.height = "20vh"
searchBar.style.width = "99vw"
searchBar.style.backgroundColor = "#f95959"
searchBar.textContent = "Anime"
searchBar.style.fontFamily = ""
searchBar.style.color = "#e3e3e3"
searchBar.style.textAlign = "center";
searchBar.style.fontSize = "140px"
body.appendChild(searchBar);

//this is our input element 
let input = document.createElement("input");
input.style.width = "700px"
input.style.height = "80px"
input.style.fontSize = "40px"
input.style.margin = "auto"
input.style.position = "absolute"
input.style.left = "50%";
input.style.top = "50%";
input.style.transform = "translate(-50%, -50%)";
input.style.backgroundColor = "#455d7a"
input.id = "searchInput";
input.type = "text"
input.placeholder = "Enter anime name..."
body.appendChild(input);

//function that creates a button and adds an eventlistener so when the button is pressed it will send a request to the API with the provided anime name(input)
//also takes the value of the input and stores it in a variable called searchQuery
buttonSearch();

function buttonSearch() {
let button = document.createElement("button");
button.textContent = "Shows";
button.style.backgroundColor = "#455d7a"
button.style.color ="#e3e3e3"
button.style.fontFamily = "'Montserrat', sans-serif"
button.className = "buttonClass"


// console.log(searchQuery)
//the searchQuery needs to be within the eventlistener in order for the event to fire and retrieve data that corresponds with the user's input
button.addEventListener("click", function() {
let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/anime?q=" + searchQuery, myResults)
    $("input").hide()
})
searchBar.appendChild(button)}



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
resultContainer.style.margin = "auto"
// resultContainer.style.backgroundColor = "black";
// resultContainer.style.overflow = "scroll";
body.appendChild(resultContainer);

    // console.log(anime.title)
    let span = document.createElement("div");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "#455d7a"
    span.style.display = "inline-block"; 
    span.style.position = "relative"; 
    span.style.border = "2px solid #000"
resultContainer.appendChild(span);


let h2 = document.createElement("h2");
 h2.textContent = anime.title;
 h2.style.color = "#e3e3e3"
span.appendChild(h2);

span.addEventListener("mouseenter", function() {
    $(p).show();
    $(h4).show()
     $(a).show()
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
h4.style.color = "#e3e3e3"
div.appendChild(h4)
$(h4).hide();


let p = document.createElement("p");
p.textContent = anime.synopsis;
// console.log(anime.synopsis)
p.style.color = "#e3e3e3"
div.appendChild(p);
$("p").hide()

let a = document.createElement('a');
a.textContent = "more info."
a.href = anime.url
a.target = "_blank"
div.appendChild(a)


let img = document.createElement("img");
img.src = anime.images.jpg.image_url;
img.style.display = "block";
img.style.margin = 'auto'
// console.log(anime.images.jpg)
span.appendChild(img)

function getGenre() {anime.genres.forEach((genre) => {
    let h3 = document.createElement("h3");
    h3.textContent = genre.name;
    h3.style.color = "#e3e3e3"
    h3.style.margin = "0 7px"
    h3.style.display = "inline-block"
    div.appendChild(h3)

});
}


getGenre();
})

}

let charButton = document.createElement("button");
charButton.textContent = "Characters";
charButton.className = "buttonClass"
charButton.style.backgroundColor = "#455d7a"
charButton.style.color ="#e3e3e3"
charButton.style.fontFamily = "'Montserrat', sans-serif"
searchBar.appendChild(charButton);
charButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/characters?q=" + searchQuery, getChar)
    $("input").hide()
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
    charContainer.style.margin = "auto"
   
    
body.appendChild(charContainer);

let span = document.createElement("span");
span.className = "card";
span.style.height = "40vh"
span.style.width = "40vw";
span.style.margin = "auto"
span.style.backgroundColor = "#455d7a"
span.style.display = "inline-block"; 
span.style.position = "relative"; 
span.style.border = "2px solid #000"
charContainer.appendChild(span);

let h2 = document.createElement("h2");
 h2.textContent = character.name;
 h2.style.color = "#e3e3e3"
span.appendChild(h2);

let img = document.createElement("img");
img.src = character.images.jpg.image_url;
// console.log(character.images.jpg)
img.style.display = "block";
img.style.margin = 'auto'
span.appendChild(img)

let p = document.createElement("p");
p.textContent = character.about;
p.style.color = "#e3e3e3"
span.appendChild(p)

span.addEventListener("mouseenter", function() {
    $(h2).hide();
    $(img).hide();
    $(p).show();
})

span.addEventListener("mouseleave", function() {
    $(h2).show();
    $(img).show();
    $(p).hide();
})


}) 
}


let mangaButton = document.createElement("button");
mangaButton.textContent = "Manga";
mangaButton.className = "buttonClass"
mangaButton.style.backgroundColor = "#455d7a"
mangaButton.style.color ="#e3e3e3"
mangaButton.style.fontFamily = "'Montserrat', sans-serif"
searchBar.appendChild(mangaButton);

mangaButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/manga?q=" + searchQuery, getManga)
    $("input").hide()
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
    mangaContainer.style.margin = "auto"
body.appendChild(mangaContainer);

let span = document.createElement("span");
span.className = "card";
span.style.height = "40vh"
span.style.width = "40vw";
span.style.margin = "auto"
span.style.backgroundColor = "#455d7a"
span.style.display = "inline-block"; 
span.style.position = "relative"; 
span.style.border = "2px solid #000"
mangaContainer.appendChild(span);

let h2 = document.createElement("h2");
 h2.textContent = manga.title;
 h2.style.color = "#e3e3e3"
span.appendChild(h2);

  let rank = document.createElement("h3");
 rank.textContent = `Rank: ${manga.rank}`
 rank.style.margin = 'auto'
 rank.style.color = "#e3e3e3"
 span.appendChild(rank)

 let score = document.createElement("h3");
 score.textContent = `Score: ${manga.score}`
 score.style.margin = 'auto'
 score.style.color = "#e3e3e3"
 span.appendChild(score);

  let chapters = document.createElement("h3");
 chapters.textContent = `Chapter: ${manga.chapters}`
 chapters.style.margin = 'auto'
 chapters.style.color = "#e3e3e3"
 span.appendChild(chapters)

 let backGround = document.createElement("p");
 backGround.textContent = manga.background;
 span.appendChild(backGround);
 $(backGround).hide();


let img = document.createElement("img");
img.src = manga.images.jpg.image_url;
// console.log(character.images.jpg)
img.style.display = "block";
img.style.margin = 'auto'
span.appendChild(img)

span.addEventListener("mouseenter", function () {
    $(h2).hide();
    $(rank).hide();
    $(score).hide();
    $(chapters).hide();
    $(img).hide()
    $(backGround).show();
})
span.addEventListener("mouseleave", function() {
    $(h2).show();
    $(rank).show();
    $(score).show();
    $(chapters).show();
    $(img).show()
    $(backGround).hide();
})
})
}

let magazineButton = document.createElement("button");
magazineButton.textContent = "Magazine";
magazineButton.className = "buttonClass"
magazineButton.style.backgroundColor = "#455d7a"
magazineButton.style.color ="#e3e3e3"
magazineButton.style.fontFamily = "'Montserrat', sans-serif"
searchBar.appendChild(magazineButton);

magazineButton.addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value
    $.get("https://api.jikan.moe/v4/magazines?q=" + searchQuery, getMag);
    $("input").hide()
})

function getMag(magData) {
    console.log(magData)
    let magazineData = magData.data
    magazineData.forEach((magazine) => {
        console.log(magazine.url)
        let magazineContainer = document.createElement('div');
        magazineContainer.style.height = "40vh"
        magazineContainer.style.width = "40vw"
        magazineContainer.style.display = 'flex'
        magazineContainer.style.flexWrap = 'wrap'
        magazineContainer.style.margin = "auto"
    body.appendChild(magazineContainer);
    
    let span = document.createElement("span");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "#455d7a"
    span.style.display = "inline-block"; 
    span.style.position = "relative"; 
    span.style.border = "2px solid #000"
    magazineContainer.appendChild(span);
    

    
    let h2 = document.createElement("h2");
    h2.style.textAlign = "center";
    span.appendChild(h2);

      let a = document.createElement("a");
    a.setAttribute("href", magazine.url);
    a.target = "_blank"
    a.textContent = magazine.name;
    h2.appendChild(a);

    
    
    })
}
});

