//This module loads the contact page
export function loadContact () {
    console.log('contact info goes here');

    let content = document.getElementById("content");

    //Adds container to page
    let container = document.createElement("DIV");
    container.id = "contactDiv";
    //Adds contact info to container
    let contactInfo = document.createElement("H2");
    contactInfo.innerHTML = "Contact Papa Pat's Pizzeria at " +
    "(555)-555-5555";
    container.appendChild(contactInfo);

    //Appends container to content
    content.appendChild(container);
}