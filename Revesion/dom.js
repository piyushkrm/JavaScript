// DOM MANIPULATION
let el = document.getElementById('btn');
console.log(el);

let el2 = document.getElementsByClassName('para');
console.log(el2);

let el3 = document.getElementsByClassName('con')
console.log(el3);
el3[0].classList.add("bg-primary");
el3[0].classList.add("text-success");
el3[0].classList.remove("text-success"); 


console.log(el.innerHTML);
console.log(el.innerText);

console.log(el3[0].innerHTML);
console.log(el3[0].innerText);

console.log(document.getElementsByTagName('div'));

console.log(document.getElementsByTagName('p'));

createElement = document.createElement('h3');
createElement.innerText = "This is a heading 3";
console.log(document.getElementsByTagName('div')[0].appendChild(createElement));


console.log(document.querySelector('#container'));
console.log(document.querySelectorAll('#container'));