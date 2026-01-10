//promises
//aap el promise bnate ho jo ki do states mein se ek state me jaa skta hai and woh ya toh resolve hoga ya toh reject hoga ab woh kya hoga yeh toh waqt btayega par hame dono ke liye code ikhhna padta hai .

let pr = new Promise(function (res,rej){  //promise accepts a function which has 2 parameters resolve and reject .
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10)
        if(rn > 5) res("resolved with" + rn )
            else rej("rejected with " + rn)
    } , 3000)

})
//2 hi chizen ho skti hai resolve ya reject ..

pr
.then(function(val){
    console.log(val)
})  //resolve hoga toh yeh chalega //it accepts a function inside it.
.catch(function(val){
    console.log(val)
})  //reject hua th yeh chalega . catch also accepts a function inside it.