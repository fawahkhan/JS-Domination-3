//koi bhi code line by line chalega aur yeh natural pattern bhi hota hai ki code line by line chale but kabhi kabhi aese cases aate hai life mein jahan pr aapka code wait krta hai aur utni der me agla code chal jaata hai.

//aesa code jo normally line by line chale woh hota hai synchronous code //each operations waits for the previous code to be executed.
//aesa code jo jab chalne ke liye ready hojaye tb chale woh hota hai asynchronous code.


//ek function ko agr aap ek aur function bhej de rhe ho parameter me , toh woh parameter wala function kehlata hai callback .


// function created ... fnc is callback function.
function kuchderbaadChalunga(fnc){
    setTimeout(fnc , 1000)
}

//function called.
kuchderbaadChalunga(function(){
    console.log("hey")
})


//promises
//aap el promise bnate ho jo ki do states mein se ek state me jaa skta hai and woh ya toh resolve hoga ya toh reject hoga ab woh kya hoga yeh toh waqt btayega par hame dono ke liye code ikhhna padta hai .

let pr = new Promise(function (res,rej){  //promise accepts a function which has 2 parameters resolve and reject .
    setTimeout(()=>{
        res("harsh");
    } , 3000)

})
//2 hi chizen ho skti hai resolve ya reject ..

pr
.then(function(val){
    console.log(val)
})  //resolve hoga toh yeh chalega //it accepts a function inside it
.catch(function(val){
    console.log(val)
})  //reject hua th yeh chalega . catch also accepts a function inside it