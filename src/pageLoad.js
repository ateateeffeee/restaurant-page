//This module loads the webpage
export function loadPage() {
    console.log('loading page now');


    let content = document.getElementById("content");

    //Add home page div
    let homeDiv = document.createElement("DIV");
    homeDiv.id = "homeDiv";

    //Add headline
    let headline = document.createElement("H1");
    headline.innerHTML = "Papa Pat's Pizzeria";
    homeDiv.appendChild(headline);

    //Add image
    let image = document.createElement("IMG");
    image.src = '/dist/Images/burnt pizza.png';
    homeDiv.appendChild(image);

    //Add text
    let welcomeText = document.createElement("P");
    welcomeText.innerHTML = "Welcome to Papa Pat's Pizzeria! " +
    "Where you will be treated like a king or queen by our " +
    "world-renowned chef, Pat McConnell! What will you try first? " +
    "Papa Pat's Perfect Pepperoni Pizza? Papa Pat's Poached " +
    "Personal Pan Pastrami? " + "We only serve two things!";
    homeDiv.appendChild(welcomeText);

    //Append homeDiv to content
    content.appendChild(homeDiv);
}