// scope hai ki aap apne created variables and functions kahan tk use kr skte hai 

//scope - functional scope , global scope and block scope .

// function scope - sirf function ke andr hi use ho skti hai
//global scope - poore code me kahi bhi use ho skti hai
//block-scope - {curly braces me hi use ho skti hai}


//execution context -
// js sabse pehle kese hi apka function dekhta hai sabse pehle js banata hai exectution context, ye ek process hai jo ki do different phases me chalta hai:- 1. Memory phase  2. Execution phase



// lexical scoping -- followed in js. isme aap kaha pr physically present ho ispe depend krta hai ki apko kya resources milenge ... in the example , abcd me koi a ki value lexically/physically present nhi hai toh woh global scope me dhundega and a=12 print krega .

//dynamic scoping -- not followed in js -- yeh dynamically check krega ki agr a ki value present hai jahan function use hua toh wahi se lelega example defg me a ki value hai aur wahi fn abcd call hua toh agr dynamic scoping hoti toh woh a= 13 print krta .
let a=12

function abcd(){
     console.log(a)
}

function defg(){
    let a = 13
    abcd();
}
defg();

//output -- 12 since lexical scoping

//closures --these re the functions which are used inside another function and andr wala function return ho rha ho and woh parent function ki koi value / variable return kr rha ho ...

function abc(){
    let a = 12 
    return function(){   // function returning a function
        console.log(a);  //used 'a' from the parent fn
    }

}

//fayde -- 
// pvt variables cn be made
//encapsulation
// global pollution can be stopped--mtlb global scope me jitne sare variable bana diye usse bacha lega.


// jab ek function end hota hai toh hamara fn aur uske variables sab khtm hojate hai ,, BUT BUT jab bhi closures bante hai toh apka function aaur uske variables ka ek backlink banaya jaata hai aur uska naam hota hai  [[environment]] .
  