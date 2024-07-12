// let para = document.querySelector(".para");

// para.onclick = (e) => {
//     let number = prompt(`Enter number for printing text : `)
//     let print = 1;
//     for (print; print <= number; print++) {
//         console.log(`Thanku for hovering me ${number} times !`);
//         console.log(e);
//     }
// }

// let divbox =document.querySelector("#divbox");
// divbox.onmouseover = (e) => {
//     console.log('You are on the box');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// Adding event listener 

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", ()  => {
//     console.log("handler one fire");
// });
// btn1.addEventListener("click", ()  => {
//     console.log("handler second fire");
// });
// btn1.addEventListener("click", ()  => {
//     console.log("handler third fire");
// });
// btn1.addEventListener("click", ()  => {
//     console.log("handler fourth fire");
// });

// btn1.addEventListener("click", ()  => {
//     console.log("handler fifth fire");
// });

// const handler = () => {
//     console.log("handler sixth fire");
// }
// btn1.addEventListener("click", handler);


// Remove event listener  sixth removed
// btn1.removeEventListener("click", handler);




// PRACTICE QUESTION 
// Q.1 Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let theme = document.querySelector("#theme");
let body =  document.querySelector("body");
let currentmode = "light";
theme.addEventListener("click", () => {
    // console.log("You are trying to change mode");
    // console.log(currentmode);

    if (currentmode === "light") {
        // document.querySelector("body").style.background = "black";
        // document.querySelector("body").style.color = "white";
        currentmode = "dark";
       body.classList.add("dark");
       body.classList.remove("light");

    } else {
        // document.querySelector("body").style.background = "white";
        // document.querySelector("body").style.color = "black";
        currentmode = "light";

        // using css
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentmode);
});

// HOME WORK -----> CREATE SOMETHING USING MOUSE HOVER EVENT
let clickme = document.querySelector("#clickme");
let div = document.querySelector("#di");
// let old = document.querySelector(".old");
let newmg = document.querySelector(".newImg");
clickme.addEventListener("mouseover", () => {
    // let old = document.querySelector(".old").style.width = "80%";
    document.querySelector(".old").style.visibility = "visible";
    // document.querySelector(".div").style.background = "black";
    old.classList.add("div").classList.add("newImg");
    // old.classList.remove(old);
    // console.log(old);
    // old.classList.add("newmg");
    // document.querySelector("img").style.width = "100%";
    console.log("Hover effect are updated !")
    // let old = 80%;
    // let oldimg = old;
    // if (clickme === oldimg) {
    //     old.style.width = "40%";
    // } else {
    //     old.style.width = "80%";
    // }
    // console.log(old);
});

