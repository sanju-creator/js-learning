/* Memory concept
 stack->(primitives value: numbers, booleans, string.[you give a copy of value]) 
 Heap->(Non primitives value: object, function [you give a original value])*/
let myYoutubeName = "sanju"

let anotherName = myYoutubeName
anotherName = "Pallabi"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    name: "Riya",
    emailId: "riya@google.com"
}

let userTwo = userOne

userTwo.emailId = "pallabi@google.com"

console.log(userOne.emailId);
console.log(userTwo.emailId);