// EVENTS IN JS
function clicked() {
    alert("You clciked on button")
}

// window.onload = function() {
//     alert("Documents are loading slowly slowly")
// }


// events

events = document.querySelector("#even");
events.addEventListener('click', function() {
    console.log("Button was clicked")
})

events.addEventListener('mouseover', function() {
    console.log("Mouse on Container");
})

events.addEventListener('mouseout', function() {
    console.log("Mouse out of container");
})

events.addEventListener("mouseup", function() {
    console.log("Mouse up when clicked on container");
})

events.addEventListener("mousedown", function() {
    console.log("Mouse down when clicked on container");
})

events.addEventListener('click', function() {
    document.querySelectorAll('.con')[1].innerHTML = "<i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias</i>"
    console.log("Button was clicked")
})