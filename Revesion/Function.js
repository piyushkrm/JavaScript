// DRY : Do not Repeat Yourself
function avg(a, b) {
    return (a + b) / 2;
}

p1 = avg(10, 15);
console.log(p1)
console.log(avg(45, 56));

// conditional statement
age = 19;
if (age > 18) {
    console.log("You can drink");
}

// loop
var arrau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < arrau.length; i++) {
    console.log(arrau[i]);
}

// for each
arrau.forEach(function(element) {
    console.log(element)
})

// while loop
let j = 0;
while (j < arrau.length) {
    console.log(arrau[j]);
    j++;
}

// do-while loop
let p = 0;
do {
    console.log(arrau[p]);
    p++;
} while (p < arrau.length);