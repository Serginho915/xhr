// debugger;
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();
let finalArr = [];
request1.open(`GET`, `./data.json`,false); 
request2.open(`GET`, `./data2.json`,false); 

request1.send();
request2.send();

let response = request1.response;
response = JSON.parse(response);

let response2 = request2.response;
response2 = JSON.parse(response2);

finalArr.push(...response.children, ...response2.children)
console.log(finalArr)





