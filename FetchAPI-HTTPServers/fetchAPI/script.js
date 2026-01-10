// isse data ko manga skte hai ...

fetch("https://randomuser.me/api/")
.then((rawdata) => {  //this raw data is not readable it needs to be converted to json format to access it
    return rawdata.json() ; //implicit return ... fr agli hi line me frse .then laga ke isey access kr skte hai.
})
.then ((data)=>{
    console.log(data.results[0].name.first)
})
.catch((err) => {
    console.log(err)
})