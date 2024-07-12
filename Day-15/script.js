const fact = document.querySelector(".facts");
const btn = document.querySelector(".btn");
const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);


// ASYNC FUNCTION 
const getFacts = async() => {
    console.log("getting data.....")
    let response = await fetch(URL);
    console.log(response);
    // console.log(response.status);       //JSON format

    // use jason()
    let data = await response.json();
    // console.log(data[0].text);
    fact.innerHTML = data[3].text;
}
btn.addEventListener("click", getFacts);


// SAME WORK WITH PROMISE CHAINING
// function facts() {
//     fetch(URL).then((response) => {
//         return response.json()
//     }).then((data) => {
//         // console.log(data);
//         fact.innerHTML = data[4].text;
//     })
// }


// btn.addEventListener("click", facts);