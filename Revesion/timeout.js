// Set time out and set interval

clr = setTimeout(lock = () => {
    alert("This was locked");
}, 3000)

clearTimeout(clr)

clr1 = setInterval(imLock = () => {
    console.log("I am again locked");
}, 1000);

clearInterval(clr1);