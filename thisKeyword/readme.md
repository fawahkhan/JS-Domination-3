# this ki values

global -- window
function - window
method with es5 function - object
method with es6 arrow function - window
es5 function inside a es-5 method - window
es6 arrow function inside a es-5 method -object   
 # arrow function this ki value parent se lete hai.
event handler - element jispe listener laga ho
class - blank object



# call , apply , bind

function ko call krte waqt ham set kr skte hai ki uske this ki value kya hogi

let obj = {
    name: "harsh" ,
}; 

function abcd(){
    console.log(this);
}

abcd.call()



