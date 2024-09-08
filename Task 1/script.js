function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email && password){
        alert("SAVE INFO: \n Email: "+ email + "\n Password:");
    }
}

function alertRule(){
    alert("Password must contain alphabets, numbers and special characters.");
}

function checkPassword(pswd){
    const alphaRegex = /[a-zA-Z]/;
    const numRegex = /[0-9]/;
    const specialRegex = /[^a-zA-Z0-9\s]/;

    var isalpha = alphaRegex.test(pswd);
    var isNum = numRegex.test(pswd);
    var isSpecial = specialRegex.test(pswd);

    if(isalpha && isNum && isSpecial){
        return true;
    }
    else{
        return false;
    }
}

function signUp(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pswd = document.getElementById("password").value;
    if(pswd.length < 8){
        alert("Password should have at least 8 characters.");
    }
    else if(!checkPassword(pswd)){
        alert("Password must include alphabets, numbers and special characters");
    }
    else if(name && email && pswd){
        const cnfmPass = document.getElementById("cnfmPassword").value;
        if(pswd !== cnfmPass){
            alert("Password didn't match.");
        }
        else{
            alert("NEW USER ADDED \n Name: " + name + "\n Email: " + email + "\n Password: ");
        }
    }
}