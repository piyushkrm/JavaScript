// let div = document.querySelector(".clas");
// console.log(div);
// let id  = div.getAttribute("name");
// console.log(id);

// let clas = document.querySelector("p");
// console.log(clas);
// // console.dir(clas);
// let idd  = div.getAttribute("name");
// console.log(idd);


// Change attribute 
// let paragraph = document.querySelector("p");
// console.log(paragraph.getAttribute("class"));
// console.log(paragraph.setAttribute("class", "new"));

// let change = paragraph.setAttribute("class", "changeclass");
// console.log(change);


// style access using js 
// let changepara = document.querySelector("div");
// changepara.style.backgroundColor = "hotpink";
// changepara.style.border = "5px solid blue";
// changepara.style.fontSize = "1.5rem";
// changepara.style.width = "auto";
// changepara.style.height = "auto";
// changepara.style.padding = "20px 20px 30px 30px";
// changepara.style.margin = "20px 20px 30px 30px";
// changepara.style.textAlign = "justify";
// changepara.innerText = "In this tutorial we learn how to change style or add style in the web page not using css and use only javascript";
// changepara.style.visibility = "hidden";

// console.log(changepara);



// INSERT ELEMENTS 

// STEP 1 --->  FIRSTY CREATE ELEMENT
// let ele = document.createElement("p");
// console.log(ele.innerHTML = "This is new paragraph that is creae by piyush using javascript");


// STEP 2 ---> ADD THIS ELEMENT IN DOCUMENT 
// let div = document.querySelector("div");
// div.append(ele);     //add at the end of div
// div.prepend(ele);   //add at the starting of div
// div.after(ele);      //add at the after the div
// div.before(ele);   //add at the before of div
// console.log(div);


// DELETE ELEMENT 
// div.remove(ele);



// FOR PERSONAL PRACTICE

// let element = document.createElement("h1");
// element.innerHTML = "This is heading that is create by me using javascript";
// document.querySelector("body").before(element)
// element.style.color = "green"
// let newheading = document.createElement("h1");
// newheading.innerHTML = "This is heading that is create by me using javascript";
// document.querySelector("body").prepend(newheading)


// let button = document.createElement("button");
// button.innerHTML = "Click on me piyush Mishra";
// document.querySelector("div").before(button);
// document.querySelector("div").prepend(button);
// document.querySelector("div").append(button);
// document.querySelector("div").after(button);

// let prt = document.querySelector("button");
// prt.style.background = "green";
// prt.style.width = "auto"
// prt.style.height = "auto"
// prt.style.fontFamily = "cursive"
// prt.style.padding = "20px 20px 20px 20px";
// prt.style.color = "white"

// button.remove()


// PRACTICE QUESTION 1
// Q.1 Create a new button element. Give it a text "click me", background color of red and text color of white.
//  Insert the button as the first element inside the body tag


// const btn = document.createElement("button");
// btn.innerHTML = "click me";

// let btnn = document.querySelector("body");
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btnn.append(btn);

// IN OTHER WAY 
// const buttn = document.createElement("button");
// buttn.innerText = "Click me";
// buttn.style.background = "pink";
// buttn.style.color = "grey";
// document.querySelector("body").append(buttn);




// Q.2 Create a <p> tag in html, give it a class and some styling.
// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one ?
// Solve this problem using classList.

// const parag = document.createElement("p");
// document.querySelector("body").append(parag);
// parag.innerText = "I am a paragraph";
// console.log(parag);



let param = document.querySelector("p");
console.dir(param);

param.getAttribute("class");
console.log(param)

// let cls = param.classList;
let cls = param.classList.add("class", "newContent");
console.log(cls);

