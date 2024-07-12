// let str1 = "Codewithpihu";
// let str2= 'Piyush Mishra';
// console.log("length of str1 is :", str1.length);
// console.log("length of str2 is :", str2.length);
// console.log("Indexes of str1[4] : ",str1[4],str2[4]);

// let specialstring = `This is codewithpihu`;
// console.log(specialstring);
// console.log("Type of specialstring is : ", typeof specialstring);

// let obj = {
//     item : "Books",
//     price : 25
// };
// console.log("The price of", obj.item, "is",obj.price);

// let newobj = {
//     brand : "Dell",
//     price : 75000,
//     location : "Bihar"
// };
// console.log("I am going to", newobj.location, "for buying laptop, which brand is",newobj.brand,"and this",newobj.brand,"laptop price is",newobj.price,"!");
// // Template Literals
// console.log(`The price of ${obj.item} is ${obj.price}`);



// ESCAPE CHARACTER 
// console.log("code\nwith\npihu"); //Next line
// console.log("code\twith\tpihu"); //Tab

// String Methods----> These are built in functions to manipulate a string
// let string1 = "codewithpihu";
// let string2 = "CODEWITHPIHU";

// // Uppercase
// console.log("String1 convert to UpperCase :",string1.toUpperCase());

// // Lowercase
// console.log("String2 is converted to LowerCase :",string2.toLowerCase());

// string2.toLowerCase();
// console.log(string2);

// let low = string2.toLowerCase();
// console.log(low);



// TRIM METHOD
// let sentrim = "            CodewithPihu                    ";
// console.log("After trim the sentence :",sentrim.trim());



// SLICE METHOD 
// let slcmtd = "this is code with pihu";
// console.log("Slicing the sentence from 2 to 17 :", slcmtd.slice(2, 17));

// Concatinations Method
// let stri1 = "Codewith";
// let stri2 = "Pihu";
// let stri0 = "Pihu, Pihu";
// // console.log("After concatination the string is show like :", stri1.concat(stri2));
// // console.log("After concatination the string is show like :", stri1 + stri2);

// // Replace Method 
// // console.log(stri2.replace("Piyush"));
// let stri3 = stri2.replace("Pihu", "Aaditya");
// let stri4 = stri0.replaceAll("Pihu", "Aaditya");
// console.log(stri1 + stri3);
// console.log(stri1 + stri4);


// let st1 = "I love JS";
// console.log(st1.charAt(0));

// PRACTICE Q.1
// Q.1 Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by theirname and ending with fullname length.
fname = prompt("Enter your fullname : ");
console.log(`Your creating username is @${fname}${fname.length}`);
console.log(`Your creating username is ${fname}@${fname.length}`);