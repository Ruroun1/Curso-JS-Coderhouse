var enterLoop = false;

function recuperarID (firstName, lastName, email){    

    if (firstName === "mister" && lastName === "blue" && email === "mister.blue@gmail.com"){
        alert(`Welcome ${firstName} ${lastName} your ID is #1`)
    } else if (firstName === "mister" && lastName === "orange" && email === "mister.orange@gmail.com"){
        alert(`Welcome ${firstName} ${lastName} your ID is #2`)
    } else if (firstName === "mister" && lastName === "yellow" && email === "mister.yellow@gmail.com"){
        alert(`Welcome ${firstName} ${lastName} your ID is #3`)
    } else {
        enterLoop = true;
        alert(`Invalid Credentials please try again`)
        
    }
}

let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");
let email = prompt("Enter email address");

recuperarID(firstName, lastName, email);

while (enterLoop = true){
    firstName = prompt("Enter first name");
    lastName = prompt("Enter last name");
    email = prompt("Enter email address");
   
   recuperarID(firstName, lastName, email);
   }