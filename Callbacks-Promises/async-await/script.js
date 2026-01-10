//koi bhi code line by line chalega aur yeh natural pattern bhi hota hai ki code line by line chale but kabhi kabhi aese cases aate hai life mein jahan pr aapka code wait krta hai aur utni der me agla code chal jaata hai.

//aesa code jo normally line by line chale woh hota hai synchronous code //each operations waits for the previous code to be executed.
//aesa code jo jab chalne ke liye ready hojaye tb chale woh hota hai asynchronous code.

// yeh basically then catch ko avoid krke ache syntax me likhne ke liye hota hai


let pr = new Promise (function (res , rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)
        if(rn>5) res("resolve with"  + rn)
        else rej("reject with"  + rn)
    },3000)
})

async function abcd(){
    try{
        let val = await pr ;
        console.log(val) ;
    }
    catch(err){
        console.log(err)
    }
}
abcd() ;