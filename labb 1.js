//1. 

document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

//2. 

let veg = document.querySelector("ul li:last-child a");
veg.textContent = "Vegetables";
veg.setAttribute("href", "#vegetables");



//3. 

let contact1 = document.getElementById("contact");
let about1 = document.getElementById("about");
main.insertBefore(about1, contact1);

//5.
let p = document.createElement("p");
p.textContent = about.textContent;
about.textContent = "";
about.appendChild(p);


//4. 

let aboutHeader = document.createElement('h2');
let aboutHeaderTextNode = document.createTextNode('About');
aboutHeader.appendChild(aboutHeaderTextNode);
about.prepend(aboutHeader);
let contactHeader = document.createElement('h2');
let contactHeaderTextNode = document.createTextNode('Contact');
contactHeader.appendChild(contactHeaderTextNode);
contact.prepend(contactHeader);



//6. 

let replace = document.querySelectorAll("thead td");
for (let td of replace) {
  let replacer = document.createElement("th");
  replacer.textContent = td.textContent;
  td.replaceWith(replacer);
}

//7. 

let head = document.querySelector("head");
let css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("href", "main.css");
head.appendChild(css);

//8. 
document.title = "Fruits & Vegetables Corp";
