// The window object represents an open window in a browser. 
// It is broser's object (not JavaScript) & is automatically created by browser.

// It is a global object with lots of properties and methods.

// window.alert ("Hey im javascript");
// window.console.log("Window");



// DOM ----->When a web page is loaded, the browser areates a DOCUMENT OBJECT MODEL (DOM) of the page
// HTML ko JavaScript ke ander access karne ka trika is called DOM
// console.dir(document.body.childNodes[1]);
// document.body.style.background="hot pink";
// document.body.style.background = "white";
// document.body.childNodes[8].style.color = "green";
// document.body.childNodes[1].style.color = "orange";
// document.body.children.style.color = "pink";
// document.body.childNodes[8].innerText = "Hey Shree";



// DOM MANIPULATION

// By ID Name 
// let head = document.getElementById("heading1");
// console.dir(head);


// By CLASS Name 
// let cls = document.getElementsByClassName("heading2");
// console.dir(cls);
// console.log(cls);


// By TAG Name 
// let paragraph = document.getElementsByTagName("p");
// console.log(paragraph);
// console.dir(paragraph);


// Selecting with query 
// let first_element = document.querySelector("p"); // Return first element
// console.log(first_element);
// console.dir(first_element);

// let all_element = document.querySelectorAll("p");  // Return all element
// console.log(all_element);
// console.dir(all_element);

// QUERY FOR CLASS 
// let cl = document.querySelector("#head");
// console.dir(cl);
// console.log(cl);

// QUERY FOR ID 
// let id = document.querySelectorAll(".para");
// console.dir(id);

// let firstEl = document.querySelector(".para");
// // console.dir(firstEl)

// let a = document.body.lastChild;
// let b = document.body.firstChild;
// // console.log(a);
// // console.log(b);

// let chd = document.querySelector("h1").children;
// console.log(chd);



// let frst = document.body.lastChild;
// let frst = document.querySelector("div").children;
// console.dir(frst);




// let div = document.querySelector("h3");
// console.dir(div);


// let heading = document.querySelector("h2");
// console.dir(heading);
// // let append = heading.innerHTML = "Hello JavaScript from apna college";
// let append = heading.innerText = heading.innerText + " from apna college";
// console.log(append);



let boxes = document.querySelectorAll(".box");

let idx = 1;
for (div of boxes) {
    div.innerText = "Unique Box";
    idx++;
}
// let firstbox = boxes[0].innerText = "First Box";
// let secondbox = boxes[1].innerText = "Second Box";
// let thirdbox = boxes[2].innerText = "Third Box";