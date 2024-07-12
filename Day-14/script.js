// //Synchronous programming ----> each and every line executed, after previous line of code are executed (code are executed in sequence)
// console.log("One");
// console.log("Two");
// console.log("Three");




// // set time out 
// function time() {
//     console.log("This is a set time out function and display this sentance after set time!");
// }
// setTimeout(time, 2000);

// setTimeout(() => {
//     console.log("This is a direct timeout funcion.")
// }, 3000);





// // ASYNCHRONOUS PROGRAMMING ---> not wait for any other line of code execution
// // for example
// console.log("I am piyush");
// console.log("I belong from Bihar");
// setTimeout(() => {
//     console.log("I am study at SIET Nilokheri, Karnal");
// }, 5000);
// console.log("I am passed diploma from Techno Apex Polytechnic, Indri, Karnal");
// console.log("I love playing cricket");









// // callback 
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCalculate) {
//     sumCalculate(a, b);
// }

// calculator(4, 6, sum);
// // or 
// calculator(4, 6, (a, b) => {
//     console.log(a + b);
// });









// //CALLBACK HELL
// const age = 20;
// if (age >=20) {
//     if (age <= 18) {
//         console.log("Age is 18");
//     } else {
//         console.log("Age is greater than 18");
//     }
// } else {
//     console.log("age is greater than 20");
// }

// for (let i = 0; i <=5; i++) {
//     let str = ""
//     for (let j = 0; j < 10; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }

// function getData(dataId, getNextData) {
//         setTimeout(() => {
//             console.log("Data = ", dataId);
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
// }
// console.log(`Getting data.....`);
// getData(10, () => {
//     console.log(`Next data getting......`);
//     getData(20, () => {
//         console.log(`Next data getting......`);
//         getData(30, () => {
//             console.log(`Next data getting......`);
//             getData(40, () => {
//                 console.log(`Next data getting......`);
//                 getData(50, () => {
//                     console.log(`Next data getting......`);
//                     getData(60, () => {
//                         console.log(`Next data getting......`);
//                         getData(70, () => {
//                             console.log(`Next data getting......`);
//                             getData(80, () => {
//                                 console.log(`Next data getting......`);
//                                 getData(90, () => {
//                                     console.log(`Next data getting......`);
//                                     getData(100);
//                                     console.log(`Now Done`);
//                                 })
//                             })
//                         })
//                     });
//                 })
//             })
//         });
//     });
// });










// DO THIS ABOVE CODE WORK USING PROMISE CHAINING
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data = ", dataId);
//             resolve(`${dataId} Data Fatching is Successfully\nNext data fetching is....`);
//         }, 2000);
//     })
// }
// console.log("Data getting....");
// getData(10).then((res) => {
//     console.log(`${res} \nNext Data Fetching...`);
//     getData(20).then((res) => {
//         console.log(`${res} \nNext Data Fetching...`);
//         getData(30).then((res) => {
//             console.log(`${res} \nNext Data Fetching...`);
//             getData(40).then((res) => {
//                 console.log(`${res} \nNext Data Fetching...`);
//                 getData(50).then((res) => {
//                     console.log(`${res} \nNext Data Fetching...`);
//                     getData(60).then((res) => {
//                         console.log(`${res} \nNext Data Fetching...`);
//                         getData(70).then(() => {
//                             console.log(`${res} \nNext Data Fetching...`);
//                             getData(80).then(() => {
//                                 console.log(`${res} \nNext Data Fetching...`);
//                                 getData(90).then(() => {
//                                     console.log(`${res} \nNext Data Fetching...`);
//                                     getData(100).then(() => {
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })






// ONE STEP NEXT SMART WORK
// console.log("Data Fetching is ready....");

// getData(10).
//     then((res) => {
//         console.log(res);
//         return getData(20);
//     }).then((res) => {
//         console.log(res)
//         return getData(30);
//     }).then((res) => {
//         console.log(res)
//         return getData(40);
//     }).then((res) => {
//         console.log(res)
//         return getData(50);
//     }).then((res) => {
//         console.log(res)
//         return getData(60);
//     }).then((res) => {
//         console.log(res)
//         return getData(70);
//     }).then((res) => {
//         console.log(res)
//         return getData(80);
//     }).then((res) => {
//         console.log(res)
//         return getData(90);
//     }).then((res) => {
//         console.log(res)
//         return getData(100);
//     }).then((res) => {
//         console.log(res);
//         console.log("All data fatching done !");
//     });







// PROMISE

// let promise = new Promise((resolve, reject) => {
//     console.log("I AM PROMISE.");
//     resolve(`Resolve`);
//     reject(`Some Error`);
// });

// EXAMPLE
// function getInfo(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data = ",dataId);
//             resolve("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 8000);
//     });
// };


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//             console.log("I AM PROMISE.");
//             resolve(`Successfull`);
//             reject(`network Error`);
//         });;
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fullfill", res);
// });

// promise.catch((err) => {
//     console.log("error are occured", err);
// });

// PROMISE CHAIN
// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("piyush")
//             resolve("success")
//         }, 3000);
//     })
// }

// function asyncFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("mishra")
//             resolve("success")
//         }, 3000);
//     })
// }

// console.log("fetching data1...");
// let p1 = asyncFun();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2...");
// let p2 = asyncFun();
// p2.then((res) => {
//     console.log(res);
// });




// now chaining both function
// console.log("fetching data1...");
// let p1 = asyncFun();
// p1.then((res) => {
//     // console.log(res);
//     console.log("fetching data2...");
//     let p2 = asyncFun();
// p2.then((res) => {
//     // console.log(res);
// });
// });





// SHORTCUT OF ABOVE CODE
// PROMISE CHAINING
// console.log("fetching data1...");
// asyncFun().then((res) => {
//     console.log("fetching data2...");
//     asyncFun2().then((res) => {
//     });
// });



// ASYNC - AWAIT 
// async function name() {
//     console.log("I am an Engineer!")
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = ", dataId);
            resolve(` Data Fatching is Successfully\nNext data fetching is....`);
        }, 3000);
    })
}

function wait() {
    setTimeout(() => {
        console.log(`Getting data`);
    }, 1000);
}

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Start`);
//             resolve("Success!")
//         }, 2000);
//     });
// }
console.log(`START DATA FETCHING`);
async function fetchdata() {
    await getData(10);
    await getData(20);
    await getData(30);
    await getData(40);
    await getData(50);
    await getData(60);
    await getData(70);
    await getData(80);
    await getData(90);
    await getData(100);
    console.log(`ALL DATA ARE FEATCHED`);
}
// fetchdata();



// DO SELF
// console.log(`START DATA FETCHING`);
// async function fetchdata() {

//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(10);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(20);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(30);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(40);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(50);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(60);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(70);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(80);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(90);
//     await wait(() => {
//         console.log(`Getting data 10`);
//     });
//     await getData(100);
//     console.log(`ALL DATA ARE FEATCHED`);
// }
// fetchdata();



// IIFE 

(() => {
    setTimeout(() => {
        console.log("hey sweetu");
    }, 2000);
})();