// MAP ---> Creates a new array with the results of some operation. The value its callback returns are used to form new array.
// arr.map(callbackFnx(value, index, array))

// let numbs = [65, 23, 89, 75, 69];
// numbs.map((val) => {
//     // console.log(val);
// });


// let numb = [65, 23, 89, 75, 69];
// let newarr = numb.map((val) => {
//     return val * val;
// });

// console.log(newarr);



//FILTER METHOD ----> Creates a new array of elements that give true for a condition/filter.
// Example --> All even elements 
// let arr = [1, 2, 4, 8, 3, 9];
// let evenArr = arr.filter((val) => {
//     // return val % 2 == 0;
//     return val >= 3;
// });
// console.log(evenArr);


// REDUCE METHOD  ----> Perform some operations and reduces the array to a single value. It returns that single value.
// let redd = [5, 7, 9, 40, 79, 4, 0, 0, 1002];
// const output = redd.reduce((prev, current) => {
    // return prev + current;

    // Find maximum element 
    // return prev > current ? prev : current;

    // Find minimum element 
    // return prev < current ? prev : current;
// });
// console.log(output);

// PRACTICE QUESTION 1
// Q.1 We are given array of marks of students. Filter out the marks of students that scored 90+.

// let marks = [97, 64, 32, 49, 99, 96, 86]
// let tooper = marks.filter((val) => {
//     return val > 90;
// });
// // console.log(tooper);


// Q.2 Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calulate sum of all numbers in the array. 
// Use the reduce method to calculate product of all numbers in the array.

let user = prompt("Enter a n number : ");
let array = [];
for (let i = 1; i <= user; i++) {
    array[i-1] = i;
}



// Sum of array 
console.log(array);
const reduce = array.reduce((pre, cun) => {
    return pre + cun;
});
console.log(`Sum of an array is : ${reduce}`);



// Factorial of a number 
const factorial = array.reduce((pre, cun) => {
    return pre * cun;
});
console.log(`factorial of an array is : ${factorial}`);