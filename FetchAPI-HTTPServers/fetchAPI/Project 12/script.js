function getUsers(){
    
    fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) =>{
        document.querySelector(".users").innerHTML = ""
        data.results.forEach(function(user){
            //console.log(user.name)
            // outer card
    const card = document.createElement("div");
    card.className =
      "bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm w-full";

    // top section
    const top = document.createElement("div");
    top.className = "flex items-center space-x-4";

    // avatar
    const img = document.createElement("img");
    img.className =
      "w-16 h-16 rounded-full border-2 border-blue-400";
    img.src = user.picture.large
    img.alt = "User avatar";

    // name + role container
    const info = document.createElement("div");

    const name = document.createElement("h2");
    name.className = "text-xl font-semibold text-gray-100";
    name.textContent = user.name.first +" " + user.name.last ;

    const role = document.createElement("p");
    role.className = "text-gray-400 text-sm";
    role.textContent = "Frontend Developer";

    info.append(name, role);
    top.append(img, info);

    // details section
    const details = document.createElement("div");
    details.className = "mt-4";

    const email = document.createElement("p");
    email.className = "text-gray-300 text-sm";
    email.textContent = user.email;

    const location = document.createElement("p");
    location.className = "text-gray-300 text-sm";
    location.textContent = "Location: New York, USA";

    details.append(email, location);

    // buttons section
    const actions = document.createElement("div");
    actions.className = "mt-4 flex space-x-2";

    const messageBtn = document.createElement("button");
    messageBtn.className =
      "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition";
    messageBtn.textContent = "Message";

    const profileBtn = document.createElement("button");
    profileBtn.className =
      "bg-gray-700 text-gray-200 px-4 py-2 rounded hover:bg-gray-600 transition";
    profileBtn.textContent = "Profile";

    actions.append(messageBtn, profileBtn);

    // assemble card
    card.append(top, details, actions);

    // mount to DOM
    document.querySelector(".users").appendChild(card);

        });
    })
}
getUsers();
let refresh = document.querySelector("#refreshBtn") 
refresh.addEventListener("click" , function(){
    getUsers();
})