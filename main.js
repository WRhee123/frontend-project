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



function myResults(jikanData) {
// console.log(jikanData);
let animeData = jikanData.data
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

    console.log(anime.title)
    let span = document.createElement("span");
    span.className = "card";
    span.style.height = "40vh"
    span.style.width = "40vw";
    span.style.margin = "auto"
    span.style.backgroundColor = "white"
    span.style.display = "inline-block"; /* Ensures the span takes up only as much width as necessary */
    span.style.position = "relative"; /* Establishes a positioning context for absolutely positioned children */
    span.style.border = "2px solid #000"
      
      
     
        // span.img.style. width = 100%; /* Make the image fill the width of the parent span */
        // span.img.style.height = 100%; /* Make the image fill the height of the parent span */
        // span.img.style.object-fit = "cover"; /* Maintains aspect ratio while covering the entire span */
        // span.img.style.position = "absolute"; /* Position the image within the span */
        // span.img.style.top: 0; /* Position from the top of the span */
        // span.img.style.left: 0; /* Position from the left of the span */
      



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
console.log(anime.images.jpg)
span.appendChild(img)


})

}



});
