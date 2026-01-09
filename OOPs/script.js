// class CreatePencil{
//     constructor(name, company, price, color ){ //yeh pehla element hota hai jo chalta hai jab object create krte hai class ka
//         this.name = name ;
//         this.company = company ;
//         this.price = price ;
//         this.color = color;

//     }
//     // constructor me sare variable define krdiye ab uske bahar apne methods deffine krdenge
    
//     erase(){
//         //arrow function apni value hamesha parent se leta hai
//         document.body.querySelectorAll("h1").forEach((elem) => {
//             //elem.remove(); //isse saare banaye huye elements remove hojayenge.
//             //agr sirf ek hi colour ki pencil ko remove krna hai toh 
//             if(elem.style.color === this.color){
//                 elem.remove();
//             }
//         })
//     }

//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent = text ;
//         h1.style.color = this.color ;
//         document.body.append(h1)
//     }
// }

// //now creating objects--instance of class 

// let p1 = new CreatePencil("nataraj", "nataraj", 10, "black")
// let p2 = new CreatePencil("doms" , "doms", 15 , "blue")


//extends and supers

class User{
    constructor(fname, address, username, email){
        this.fname = fname ;
        this.address = address ;
        this.username=username  ;
        this.email = email;
        // this.role = role ;   
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = ` ${this.fname} : ${text}` ;
        document.body.appendChild(h1) ;
    }
}

class Admin extends User { //is admin class ke pas woh sab hoga jo ek user ke pas hota hai toh ham woh sab wapas se toh nhi likhna chahenge jo already likhdiya .. isliye taki user ki hi properties ko inherit krle toh uske aage likhdiya "extends User"
    constructor(fname, address, username, email){ //itni chizen toh bhejni hi padengi jitni parent class me thi
        super(fname, address, username, email)    //we called super ---means we called the constructor of parent function
        this.role = "admin"
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}

let u1 = new User ("harsh" , "bhopal" , "async123", "adb@gmail.com" )
let u2 = new User ("harshita" , "hopal" , "async122", "acb@gmail.com")
let u3 = new Admin ("harshta" , "bhpal" , "asyn122", "ab@gmail.com")