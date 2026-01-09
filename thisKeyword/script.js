//this keyword -- special keyword in which jese bake saare keywords ki value ya unka nature same rehta hai but this ka value ya nature badal jata hai depending on where it is used


//1. global scoped -- yahan this ki value 'window' hoti hai
//window hai pradhan mantri -- supreme
console.log(this) ;


//2. in function scoped -- yahan bhi iski value window hoti hai

function abd(){
    console.log(this);
}
abd()

//3. in method -- (method: ek aisa function jo ek object ke andr ho usey ham method kehte hai ) ---method me this ki value object hojata hai .. poora object hojata hai 
//this will return this ... make sure object ke andr ka function is not an arrow funtion , agr arrow function hua toh this apni value lose krdega aur window banjaega...
//agr function ke andr frse function hua toh bhi this apni value lose krdega ... toh hame agr function ke andr function rkhna hua toh andr wala function hamesha arrow function rhega.
/*{
    myname: fawah ,
    sayName: function(){  //function inside an object
        console.log(this)
    }
}*/
let obj = {
    myname: fawah ,
    sayName: function(){  //function inside an object
        console.log(this)
        console.log(this.myname)
    }
}

obj.sayName()

// this.myname will give fawah ... this ke bad jo bhi key likhi jayegi uski value lautadega this keyword

// 4. event handler me this haamesha wohi banda hoga jiske upr addEventListener laga hai

document.querySelector("h1").addEventListener("click" , function(){
    console.log(this)  //will give h1
    console.log((this.style.color = "red"))  //will change the color of h1
})

// 5. in a class -- this ki value blank object hoti hai . 
class Abcd{
    constructor(){
        console.log(hey)
        this.x = 12 ;  // this ki jagah black object banjayega and woh val me chala jayyega
    } 
}

let val = new Abcd() ;   //new keyword created an object of a class .


//function ko call krte waqt ham set kr skte hai ki uske this ki value kya hogi
//call apply bind
let obj1 = {
    name: "harsh" ,
    age : 26 ,
}; 

function abcde(a,b,c){
    console.log(this);
}

abcde.call(obj1 ,1,2,3)   //obj1 ko this bana diya.
 
abcde.apply(obj1 , [1,2,3])  //apply me ek se zyada parameters agr bhej rhe ho toh aap bas 2 parameters bhejoge --- pehla object jisey this banana hia aur dusra ek array containing all other parameters

let fn = abcde.bind(obj1 ,1,2,3)  //yeh same call ki tarah hai lekin yeh function ko call nhi krta yeh function ko duplicate krke ek naya function de deta hai jisme this ki value obj rehti hai , aur fr baad me usey variable me save krke usey call kr skte hai .


