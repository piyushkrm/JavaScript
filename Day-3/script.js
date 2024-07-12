// FOR LOOP

// for (let count=1; count<=12; count++)
// {
//     // console.log("Hello Pihu");
//     console.log("count = ", count)
// }
// console.log("Loop has ended");



// ENFINITE LOOP ---> NEVER EVER USE THIS LOOP OTHERWISE CROME ARE CRASHED

// for  (let i = 1; i>=0; i++) {
//     console.log("i = ", i)
// }
// console.log("Loop are never end");



// Calculate sum of 1 to 100 numbers 

// let sum = 0;
// let n = 1000;
// for (let i = 1; i<=n; i++) {
//     sum+=i;
// }
// console.log("Calculate sum of 1 to 100 numbers is :",sum);




// WHILE LOOP

// let i = 1;
// while (i<=5) {
//     console.log("i = ", i);
//     i ++;
// }



// DO WHILW LOOP

// let i = 10;
// do {
//     console.log("Do While loop are started")
//     i ++;
// } while (i<=3);



// FOR-OF LOOP
// use for string and array not for objects

// let str = "CodeWithPihu"
// let length = 0;
// for (let i of str) {  // iterator --> characters
//     console.log("i = ",i);
//     length++;
// }
// console.log("String size = ",length);



// FOR-LOOP
// for objects
// let student = {
//     name : "Pihu",
//     age : 17,
//     pass : true
// };

// for (let key in student) {
//     console.log("key =", key, ":", student[key]);
// }

// PRACTICE Q.1
// Print all even number from 0 to 100

// let n = 10;
// for (let num=1; num<=n; num++) {
//     if (num%2==0) {
//         console.log("This Numbers is : ", num, "Even");
//     }
//     else if (num%2!=0){
//         console.log("This Numbers is : ", num, "Odd");
//     }
// }

// PRACTICE Q.2
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 18;
let userNum = prompt("Guess the number :");

while (userNum != gameNum) {
    userNum = prompt("You Entered wrong number. Guess again");
}
console.log(" Congratulations you Gusseing number is correct");


// if (random == 10) {
//     console.log("Congraluation");
//     console.log("You guessing number is correct");
// }
// else {
//     console.log("Try again your guessing number is not correct")
//     prompt ("Again guess the number : ")
// }