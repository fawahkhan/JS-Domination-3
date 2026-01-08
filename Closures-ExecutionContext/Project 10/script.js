function createToaster(config){  //this parent function wil accept our configguration.
    return function(notification){  //yeh function hamari string accept krega last line ki.
        
        let div = document.createElement("div")  //created a div jo html me bnaya tha.
        
        div.textContent = notification ;  //div me wahi string likhdi jo function ne accept kri .
        
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black" } px-6 py-3 rounded shadow-lg pointer-events-none `
        document.querySelector(".parent").appendChild(div) ;  //parent div me created div ko attach krdiya.
        
        if(config.positionX !== "left" || config.positionY !== "top"){
            document.querySelector(".parent").className = "fixed parent p-10 flex flex-col gap-2 " + `${config.positionX ==="right" ? "right-5" : "left-5"} ${config.positionY ==="bottom" ?  "bottom-5":"top-5" }`
        }

        setTimeout( () => {    //notification ko 3 secbaad hatana bhi hai
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000)
    }
}

let toaster = createToaster({  //hamne yahan pe cofigurations bhejdi object ke form me.
    positionX: "right",          //ab jitne bhi toasters banenge woh iss configuration ko follow krenge
    positionY: "bottom",
    theme: "dark",
    duration: 3 ,
});

toaster("This is a dummy notification");   //jab ham yeh chalayenge toh ek string bheji ... mtlb main function me ek string bhejni padegi.

setTimeout(()=>{
    toaster("This is the second notification"); 
},2000)
