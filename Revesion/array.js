let array = ["Phone", "Camera", 24, 24.06, true];
console.log("Length of an array is : "+array.length);
console.log(array);

// delete last element of an array
console.log(array.pop());
console.log(array);


// add element at the end of an array
console.log(array.push("Sona"));
console.log(array);

// shift (Rmove 1st element from an array)
console.log(array.shift());
console.log(array)

// unshift (add element in the array at 1st position)       also print length of an array
console.log(array.unshift("Samsung"));
const length = array.unshift("Samsung");
console.log("length : "+length);
console.log(array);