obj = {name : "piyush", roll : 110, personal : {
    age : 21,
    no : 748241964
}}
console.log(obj)
console.log(typeof obj);
// convert object to string
json = JSON.stringify(obj);
console.log(json);
console.log(typeof(json))

// convert string to object

parsed = JSON.parse(`{"name":"piyush","roll":110,"personal":{"age":21,"no":748241964}}`);
console.log(parsed);
console.log(typeof parsed)