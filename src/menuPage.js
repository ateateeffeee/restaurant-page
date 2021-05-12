//This module loads the menu page
export function loadMenu () {
    console.log('loading da menu');

    let content = document.getElementById("content");

    //First Menu Item
    //Adds container to page
    let container = document.createElement("DIV");
    container.id = "menuDiv";
    //Adds menu1 div to container
    let menuItem1Div = document.createElement("DIV");
    menuItem1Div.className = "menuItems";
    container.appendChild(menuItem1Div);
    //Adds item to div
    let item1Name = document.createElement("H3");
    item1Name.innerHTML = "1. Papa Pat's Perfect Pepperoni";
    menuItem1Div.appendChild(item1Name);
    //Adds image to div
    let image1 = document.createElement("IMG");
    image1.src = 'Images/Burnt Pep.jpg';
    image1.width = "300"; //Temp property
    image1.className = "menuImages";
    menuItem1Div.appendChild(image1);

    //Second Menu Item
    let menuItem2Div = document.createElement("DIV");
    menuItem2Div.className = "menuItems";
    container.appendChild(menuItem2Div);

    let item2Name = document.createElement("H3");
    item2Name.innerHTML = "2. Papa Pat's Poached Personal Pan " +
    "Pastrami";
    menuItem2Div.appendChild(item2Name);

    let image2 = document.createElement("IMG");
    image2.src = 'Images/Pastrami.jpg';
    image2.width= "300"; //Temp Property
    image2.className = "menuImages";
    menuItem2Div.appendChild(image2);

    //Appends container to content
    content.appendChild(container);
}