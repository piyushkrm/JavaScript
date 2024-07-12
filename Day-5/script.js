// // ARRAYS
// let arrayMarks = [95, 85, 45, 79, 70, 69];
// arrayMarks[2] = 99;
// console.log(arrayMarks);
// console.log(`Length of array is ${arrayMarks.length} !`);
// console.log(`Index of 5 in present marks is : ${arrayMarks[5]}`);
// console.log(`Type of this array is : ${typeof arrayMarks}`);

// let arrayMarks = [95, 85, 45, 79, 70, 69];
// let i = 0;
// let sizeofarray = arrayMarks.length;
// for (i = 0; i<6; i++) {
//     console.log(arrayMarks[i]);
// }

// let Engg = ["Piyush", "Dilfeq", "Rajesh", "Aayush", "Ajay"];
// for (let n = 0; n<Engg.length; n++) {
//     console.log(`Engineers are : ${Engg[n]}`);
// }

// // USING FOR OFF LOOP 
// for (let engineer of Engg) {
//     console.log(engineer);
//     console.log(engineer.toLowerCase());
// }


// PRACTICE QUESTION 1
// Q.1 For a given array with marks of students --> [85, 97, 44, 37, 76, 60] Finf the average marks of the entire class.
// let avg = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of avg) {
//     sum += val;
// }
// average = sum / avg.length;
// console.log(`Average marks of class is : ${average}`);

// PRACTICE QUESTION 2
// Q.2 For a given array with price of 5 items --> [250, 645, 300, 900, 50]. All items have an offer of 10% on them. Change the array to store final price after applying offer.

// let item = [250, 645, 300, 900, 50];
// let offer = 0;
// for (let val of item) {
//     offer = val/10;
//     val -= offer;
//     console.log(`All items have an offer of 10% on then item price are :${val}`);
// }

// other method 
// let item = [250, 645, 300, 900, 50];
// console.log(`Value before offering ${item}`);
// let i = 0;
// for (let val of item) {
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     // console.log(`Value fter offer : ${item[i]}`);
//     i++;
// }
// console.log(`Value af offering ${item}`);

// other method 
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i ++) {
//     let offer = item[i] / 10;
//     items[i] -= offer;
// }
// console.log(`Value af offering ${items}`);


// Array Methods 
// PUSH  
// let foodItems = ["Apple", "Banana", "Litchi", "Onion", "Patato"];
// console.log(`Fooditem  : \n${foodItems}`);
// foodItems.push("Graps");
// console.log(`After add new fooditem  : \n${foodItems}`);
// foodItems.push("Graps", "Chips", "Kurkure");
// console.log(`After more new fooditem  : \n${foodItems}`);

// // POP 
// foodItems.pop();
// console.log(`After poping 1 item from food item : \n${foodItems}`);

// ARRAY TO STRING CONVERSION 
// console.log(`Convert foodItems to string : \n${foodItems.toString()}`);

// CONCAT ---> Joins multiple arrays and returns result
// let marval = ["Thor", "IronMan", "piderMan"];
// let dc_heros = ["SuperMan", "Batman"];
// let indian_heros = ["Ajay", "Shahrukh", "Salman"]
// let heros = marval.concat(dc_heros, indian_heros);
// console.log(`Add multiple arrays : ${heros}`);

// UNSHIFT---> Add item on starting
// let unshift = marval.unshift("Hulk");
// console.log(`Shifting new hero : ${marval}`)

// SHIFT---> Delete item on starting
// let shift = marval.shift("Hulk");
// console.log(`Shifting new hero : ${marval}`)

// SLICE METHOD ----> Return a piece of the array
// let sportman = ["Virat", "Rohit", "Rahul", "Bumbrah", "Yuzi", "Kuldip", "Gil"];
// console.log(sportman);
// console.log(sportman.slice(0, 4));
// console.log(sportman.slice(1));


//SPLICE METHOD ----> Change original array (add, remove, replace)
// console.log(sportman)
// console.log(sportman.splice(1, 2, "SKY", "ABD")) //add update
// console.log(sportman)
// console.log(sportman.splice(0, 0, "SKY", "ABD")) // add new 2 elements
// console.log(sportman)


// PRACTICE QUESTION 1
// Q.1 Create an array to store companies --> "Bloomberg", "MicroSoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
console.log(`Remove the first company from the array`)
let companies1 = ["Bloomberg", "MicroSoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies1)
console.log(`first company from the array is : ${companies1.shift()}`);
console.log(`Remove the first company from the array and array like : ${companies1}`);

// b. Remove Uber and Add Ola in its place
console.log(`Remove Uber and Add Ola in its place`)
let companies2 = ["Bloomberg", "MicroSoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Remove Uber and Add Ola in its place then array is like: ${companies2}`)
console.log(companies2.splice(2, 1, "Ola"));
console.log(`Remove Uber and Add Ola in its place :${companies2}`);

// c. Add amazon at the end
let companies3 = ["Bloomberg", "MicroSoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Add amazon at the end : ${companies3}`);
console.log(`Add Amazo at the end ${companies3.push("Amazon")}`);
console.log(`After adding Amazon at the end of array : ${companies3}`);