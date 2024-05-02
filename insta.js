function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
    if (username.includes("@") || username.includes(".")){
        console.log("Enter valid email");
        return;
    }

    if (password.length < 8) {
        console.log("Password is too short. It must be at least 8 characters long.");
        return;
    }

    
    let containsSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            containsSpecialChar = true;
            break;
        }
    }

    if (!containsSpecialChar) {
        console.log("Password must contain at least one special character.");
        return;
    }

    console.log("Username: " + username);
    console.log("Password: " + password);
}

  