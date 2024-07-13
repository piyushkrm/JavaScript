let str1 = "I am the best best";
console.log("Length of a string is  : " + str1.length);
console.log("Index value of best : " + str1.indexOf("best"));
console.log("Index value of last best : " + str1.lastIndexOf("best"));

console.log(str1.slice(4, 7));
console.log(str1.replace("best best", "very best"));


// Date and Time
let date = new Date();
console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getTimezoneOffset());
console.log(date.getDate());