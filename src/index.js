import {loadPage} from './pageLoad.js';
import {loadMenu} from './menuPage.js';
import {loadContact} from './contactPage';

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

//Eventlisteners
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
