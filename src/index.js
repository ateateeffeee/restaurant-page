import {loadPage} from './pageLoad.js';
import {loadMenu} from './menuPage.js';
import {loadContact} from './contactPage';

//Important note to self:
//Front forward slash is taken out all links to work on gh-pages
    //Put them back in to run locally.
    //This didn't work.
//Figure out how to get CSS and images to work on github boi.

//Create tabs
let navDiv = document.createElement("DIV");
navDiv.id = "navDiv";

let homeTab = document.createElement("H4");
homeTab.className = "tabs";
homeTab.id = "homeTab";
homeTab.innerHTML = "Home";

let menuTab = document.createElement("H4");
menuTab.className = "tabs";
menuTab.id = "menuTab";
menuTab.innerHTML = "Menu";

let contactTab = document.createElement("H4");
contactTab.className = "tabs";
contactTab.id = "contactTab";
contactTab.innerHTML = "Contact";

//Append tabs to navDiv
navDiv.appendChild(homeTab);
navDiv.appendChild(menuTab);
navDiv.appendChild(contactTab);

//Append navDiv to body. Not "content".
document.body.appendChild(navDiv);

//Load home page
loadPage();

//Get "content" div from "index.html"
let content = document.getElementById("content");

//Add eventlisteners
document.addEventListener("click", function(e){
    let targetId = e.target.id;
    console.log("This is what ya clicked: " + targetId);

    if (targetId.includes("home")){
        content.innerHTML = "";
        loadPage();
    } else if (targetId.includes("menu")){
        content.innerHTML = "";
        loadMenu();
    } else if (targetId.includes("contact")){
        content.innerHTML = "";
        loadContact();
    } else {
        //This stays empty
    }
})
