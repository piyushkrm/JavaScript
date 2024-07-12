// DIRECT WAY OF CREATING AN OBJECT
const student = {
    FulName: "Piyush Mishra",
    Marks: 8.64,
    printMarks: function () {
        console.log(("Marks = ", this.Marks));                // this ---> student
    },
};

// EXAMPLE OF PROTOTYE
const employee = {
    // Shortcut type function
    calTax1() {
        console.log(`Tax rate is 10%`);
    },

    // Need some extra keyword in this type of function
    calTax2: function () {
        console.log(`Tax rate is 10%`);
    },
};

const updatedEmployee = {
    taxrate() {
        console.log(`Now tax rate are updated `);
    },
};

// ADD SOME EMPLOYEE 
const piyush = {
    salary: 45000,
};

const abhinav = {
    salary: 55000,
};

const aayush = {
    salary: 65000,
};

const harsh = {
    salary: 75000,
};

const prasun = {
    salary: 85000,
};

piyush.__proto__ = employee;
aayush.__proto__ = employee;
abhinav.__proto__ = updatedEmployee;
harsh.__proto__ = updatedEmployee;
prasun.__proto__ = updatedEmployee;




// CLASS 
class ToyotaCar {
    //constructure
    constructor(price) {
        // console.log(`Price is ${ToyotaCar}`);
        this.price = price;
    }
    start() {
        console.log("Car are started !");
    }

    stop() {
        console.log("Car was stoped !");
    }

    setBrand(Brand) {
        this.BrandName = Brand;     //each induvidual index
    };
}

let fortuner = new ToyotaCar(`1500$`);
fortuner.setBrand("fortuner");
let thar = new ToyotaCar(120120);
thar.setBrand("Thar");



// INHERITANCE 
class Parent {
    hello() {
        console.log("Hey babes !");
    }
}

class Child extends Parent { }
let obj = new Child();


class Person {
    constructor() {
        this.species = "Homo species";
    }
    eat() {
        console.log(` Eating done`);
    }

    sleep() {
        console.log("Sleeping complete");
    }

    travel() {
        console.log("Tommorow we will go to Kedarnath !");
    }

    great() { //If Child and Parent have same method, child's method will be used
        console.log("Engineer is a gentelman !")
    }
}
class Engineer extends Person { //Inheri property from Person class
    great() {
        console.log("Engineer is a great man not a normal human !")
    }
}

let piyushobj = new Engineer();


// SUPER KEYWORD 
class Human {
    constructor(name) {
        this.name = name;
        console.log("Enter Human constructor!")
    }
    eat() {
        console.log(` Eating done`);
    }

    sleep() {
        console.log("Sleeping complete");
    }

    travel() {
        console.log("Tommorow we will go to Kedarnath !");
    }
}

class newhuman extends Human {
    constructor(name) {
        console.log("Enter from child constructor!");
        super(name);  //to invoke parent class constructor
        this.name = name;
        console.log("Exit from child constructor!");
    }
    great() {
        console.log("Engineer is a great man not a normal human !")
    }
}

let engObj = new newhuman("piyush");


//PRACTICE QUESTION
// Q.1 You are create a website for your college. Create a class "User" with two properties, name & email. It also has a method called viewData() that allow user to view website data.
let DATA = "Secret Information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Website data ! =", DATA);
    }
}

class secrStuInfo extends User {
    constructor(marksobtain) {
        super(marksobtain);
        this.marksobtain = marksobtain;
        console.log(`${this.marksobtain} marks are obtained by ${this.name}`)
    }
    bunk() {
        console.log("Students are bunk their classes 3 days of weak");
    }
}

let student1 = new secrStuInfo("piyush", "piyushkrm03@gmail.com", 502);
let student2 = new User("saloni", "saloni@gmail.com");

let teacher1 = new User("seema", "seema@gmail.com");



//Q2 Create a new class called "Admin" which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "Information are modified";
    }
}

let admin1 = new Admin("pihu", "pihu6@gmail.com");



// ERROR HANDLING 
a = 20;
b = 10;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a / b = ${a / b}`);
console.log(`a * b = ${a * b}`);
try {
    console.log(`a + c = ${a + c}`);
} catch (error) {
    console.log(`error is ${error}`);
}
console.log(`a - b = ${a - b}`);
console.log(`a / b = ${a / b}`);
console.log(`a * b = ${a * b}`);