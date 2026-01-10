
//ek function ko agr aap ek aur function bhej de rhe ho parameter me , toh woh parameter wala function kehlata hai callback .
// /callback inside A callcback inside a callback and so on is called callback hell.

// function created ... fnc is callback function.
function kuchderbaadChalunga(fnc){
    setTimeout(fnc , 1000)
}

//function called.
kuchderbaadChalunga(function(){
    console.log("hey")
})

