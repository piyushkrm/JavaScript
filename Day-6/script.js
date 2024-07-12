// // // FUNCTIONS
// // function myfunction() {
// //     console.log("Welcome to the Engineering worlg");
// //     console.log("Engineer are not a human he is great");
// // }
// // myfunction();

// // function parafunction(msg) {   //---> Parameter --> Input
// //     console.log(msg);
// // }

// // parafunction("I Love My Bihar");     //----> argument


// // create a function for calculating 2 number additions 
// function mathematics(a1, a2) {
//     let add = a1 + a2;
//     console.log(`Addition of two number is ${add}`);
// }

// // mathematics(20, 30);
// // mathematics(10, 30);


// //return
// function math(a1, a2) {
//     let add = a1 + a2;
//     console.log("Before return")
//     return add;
//     console.log("After return") //--> never return
// }

// let sum = math(10, 56);
// console.log(sum);



// Arrow Function ---> Compact way of writing a function 

// Normal sum function
function sum(p, q) {
    return p + q;
}

// Arrow function 
const su = (j, k) => {
    console.log(j + k);
    // return j + k;
}
// su(89, 56);


// Multiplication arrow function
const mul = (c, v) => {
    console.log(`Multiplication of those number is : ${c * v}`);
}
// mul(15, 3);

// single line of code 
let sng = () => console.log("Hello Jiii");

// sng()
// sng()
// sng()
// sng()
// sng()
// sng()
// sng()
// sng()
// sng()
// sng()

// Practice Question 1
// Q.1 Create a function using the "function" keyword that takes a String as an argument and return the number of vowels in thee string.

function rtfun(string) {
    let count = 0;
    for (const char of string) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count)
}
// rtfun("abc");

// Using arrow function perform same task 

const vowel = (string) => {
    let count = 0;
    for (let vow of string) {
        //   console.log(vow);
        if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u") {
            count++;
            console.log(`There are vowels in those string : ${vow}`);
        }
    }
    console.log(`Total number of vowels is : ${count}`);
}

// vowel("Piyush Mishra")
// vowel("ccccccccc")
// vowel("aaaaaa")



// FOR EACH LOOP IN ARRAYS
// Array.forEach(callBackFunction)
// Callback Function : Headers, it is a function to execute for reach element in the array
// **A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 5];
// arr.forEach(function printvalue(value) {
//     console.log(value);
// });

// arr.forEach((val, ind, arr) => {
//     console.log(val, ind, arr);
// });




// PRACTICE QUESTION 1
// Q.1 For a given array of numbers, print the square of each value using the forEach loop.

let square = [11, 12, 13, 44, 65, 6, 7, 8, 9, 10];

square.forEach(function sqr(value) {
    let squareValue = value * value;
    console.log(`Square of value ${value} is : ${squareValue}`);
});

// other method 
// square.forEach((num) => {
//     console.log(num*num);
// })

// another method 
let calculateSquare = (nb) => {
    console.log(nb * nb);
};
square.forEach(calculateSquare);