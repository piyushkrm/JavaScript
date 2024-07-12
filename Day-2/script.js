// This is a single line comment
console.log("This is a single line comments")

/*This is a
multiline comments
in javascript*/

console.log("This is a multiline comments")


// Arithmetic Operators
let a = 10;
let b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a = ",a ,"b = ", b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
console.log("a ++ =", a++);
console.log("a -- =", a--);

// Unary Operator
let p = 4;
let q = 6;

p = p+1;
console.log("p+1 = ", p);

// Shortcut
q++;
console.log("q++ = ", q);

console.log("Now value of p and q is = ", p , q);
console.log("p ++ = ", p++);
console.log("p = ",p);
console.log("++ p = ", ++p);

console.log("q -- = ", q--);
console.log("--q = ", --q);


// Assignment operator
let i = 8;
let j = 3;

i1 = i += 2;     // i = i + 2 
i2 = i -= 8;     // i = i - 8  
j1 = j *= 3;     // j = j * 3
j2 = j /= 3;     // j = j / 3
console.log(i1);
console.log(i2);
console.log(j1);
console.log(j2);

// Comparision operator
let r = 2;
let s = 3;

console.log("r == s", r == s);
console.log("r != s", r != s);
console.log("r === s", r === s);
console.log("r !== s", r !== s);

// Logical operators
let m = 10;
let n = 12;

stat1 = m == n;
stat2 = m < n;
stat3 = m < n;
stat4 = m < n;
console.log("stat1 && stat2 = ", stat1 && stat2);
console.log("stat3 && stat4 = ", stat3 && stat4);

console.log("stat1 || stat2 = ", stat1 || stat2);
console.log("stat3 || stat4 = ", stat3 || stat4);

// Condition operators
let age = 21;
if (age >= 18) {
    console.log("You can vote");
}

if (age = 21){
    console.log("You can also vote");
}

if (age <=18){
    console.log("You can not vote");
}

let mode = "white";
let color;

if (mode === "dark") {
    color = "white";
}
else {
    color = "black";
}

if (mode === "white") {
    color = "black";
}
else {
    color = "white";
}
console.log(color);

// if else statement
 sun = "cold";
 if (sun == "cold") {
    console.log("Weather is cold");
 }
 else {
    console.log("Weather is hot");
 }


//  ODD - EVEN PROGRAM
let Number = 91;
if (Number%2 == 0) {
    console.log(Number, "Number is EVEN");
}
else {
    console.log(Number, "Number is ODD");
}


// ELSE - IF STATEMENT 

let grade = 11;
if (grade >= 10) {
    console.log("A grade");
}

else if (grade <=9 && grade >= 7) {
    console.log("B grade");
}

else if (grade <=6 && grade >= 4) {
    console.log("C grade");
}

else if (grade <=3) {
    console.log("Fail");
}

if (grade = 11) console.log("Congraluation you have gained A++ grade");

// Ternary operator --> SIMPLER AND COMPACT IF ELSE
let price = 20;
let result = price < 80 ? "Buy" : "Not buy";
console.log(result);

let numb = 10;
numb >= 20 ? console.log("Number is greater than and equal to 10") : console.log("Number is not greater and not equal to the 10");
let rest = numb >= 20 ? ">=10" : "<=10";
console.log(rest);

// PRACICE QUESTION  1
let nob = prompt ("Enter any number");
nob % 5 == 0 ? console.log("Given number is divide by 5") : console.log("Given number is not divide by 5");

// PRACICE QUESTION  2
let marks = prompt("Enter you obtained score : ");
if (marks >= 90 || marks >= 100) {
    console.log("You obtained A grade");
} 
else if (marks >= 80 && marks <= 89) {
    console.log("You obtained B grade");
} 
else if (marks >= 70 && marks <= 79) {
    console.log("You obtained C grade");
} 
else if (marks >= 60 && marks <= 69) {
    console.log("You obtained D grade");
} 
else if (marks >= 50 && marks <= 59) {
    console.log("You obtained E grade");
} 
else if (marks <= 49) {
    console.log("Fail");
}
