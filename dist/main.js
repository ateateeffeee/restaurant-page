(()=>{"use strict";function e(){console.log("loading page now");let e=document.getElementById("content"),t=document.createElement("DIV");t.id="homeDiv";let n=document.createElement("H1");n.innerHTML="Papa Pat's Pizzeria",t.appendChild(n);let a=document.createElement("IMG");a.src="/dist/Images/burnt pizza.png",t.appendChild(a);let l=document.createElement("P");l.innerHTML="Welcome to Papa Pat's Pizzeria! Where you will be treated like a king or queen by our world-renowned chef, Pat McConnell! What will you try first? Papa Pat's Perfect Pepperoni Pizza? Papa Pat's Poached Personal Pan Pastrami? We only serve two things!",t.appendChild(l),e.appendChild(t)}let t=document.createElement("DIV");t.id="navDiv";let n=document.createElement("H4");n.className="tabs",n.id="homeTab",n.innerHTML="Home";let a=document.createElement("H4");a.className="tabs",a.id="menuTab",a.innerHTML="Menu";let l=document.createElement("H4");l.className="tabs",l.id="contactTab",l.innerHTML="Contact",t.appendChild(n),t.appendChild(a),t.appendChild(l),document.body.appendChild(t),e();let c=document.getElementById("content");document.addEventListener("click",(function(t){let n=t.target.id;console.log("This is what ya clicked: "+n),n.includes("home")?(c.innerHTML="",e()):n.includes("menu")?(c.innerHTML="",function(){console.log("loading da menu");let e=document.getElementById("content"),t=document.createElement("DIV");t.id="menuDiv";let n=document.createElement("DIV");n.className="menuItems",t.appendChild(n);let a=document.createElement("H3");a.innerHTML="1. Papa Pat's Perfect Pepperoni",n.appendChild(a);let l=document.createElement("IMG");l.src="/dist/Images/Burnt Pep.jpg",l.className="menuImages",n.appendChild(l);let c=document.createElement("DIV");c.className="menuItems",t.appendChild(c);let d=document.createElement("H3");d.innerHTML="2. Papa Pat's Poached Personal Pan Pastrami",c.appendChild(d);let i=document.createElement("IMG");i.src="/dist/Images/Pastrami.jpg",i.className="menuImages",c.appendChild(i),e.appendChild(t)}()):n.includes("contact")&&(c.innerHTML="",function(){console.log("contact info goes here");let e=document.getElementById("content"),t=document.createElement("DIV");t.id="contactDiv";let n=document.createElement("H2");n.innerHTML="Contact Papa Pat's Pizzeria at (555)-555-5555",t.appendChild(n),e.appendChild(t)}())}))})();