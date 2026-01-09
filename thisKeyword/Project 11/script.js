let form = document.querySelector("form")

let username = document.querySelector("#name")
let role = document.querySelector("#role")
let bio = document.querySelector("#bio")
let photo = document.querySelector("#photo")

const userManager = {

    users: [],  //ssabse pehle empty array bnayi jisme userss ayenge

    init: function(){ 
        //jese hi code chalega sabse pehle yeh fn chal jayega jo bhi isme kam krwana ho
        // form.addEventListener("submit",function(e){
        //     e.preventDefault();
        //     console.log(this) //abhi submit krne pe form ajayega aur haame object chahiye .

        //isliye ham eventlistener me function banayenge nhhi usey parse krenge this ki help se .
        form.addEventListener("submit" , this.submitForm.bind(this)) //yeh waala this ab ham ko object dega .
    },
    submitForm: function(e){
        e.preventDefault();
        // console.log("form submitted")  isse bas check kia ki form submit hora hai ya nhi
        //now since our form is submitting properly and it is returning our object and users is empty ... so on submitting form hame chahiye ki wahan user ajaye
        //isliye ham isme user ko push krenge
        // yahan se users.push ko cut krke add users me paste krdiya aur yahan pe this keyword se addUser ko access krlenge
        this.addUser();
    },

    
    //phir hmne 2 functions baaye user ko add aur remove krne ke liye
    addUser: function(){
        this.users.push({
            username : username.value ,
            role : role.value ,
            bio : bio.value ,
            photo : photo.value ,
        })
        form.reset() ;
    },
    //ab hame uss user ko jo add kiya usey ui pe bhi toh dikhana hia
    renderUi : function(){
        this.users.forEach(function(user){ //har bar ekek user hame milega jisey form ke bad render krna hai
            
        })
    },
    removeUser: function(){}
}
userManager.init()