//Function for checking if New Password and Confirm New password matches

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    } else {
        errorMessage.textContent = "";
    }
    return true;
}

//Function to Check if the password meets the Cond. of Having 1. One Upper case 2. Having a special chrac. 
function spec_check(){
    var password = document.getElementById("password").value;
    var Spass=document.getElementById("spec-check");

    const hasUpCase=/[A-Z]/.test(password);
    const hasSpChar=/!@#$%^/.test(password);
    if (!hasUpCase && !hasSpChar) {
        Spass.textContent = "Password must contain at least one uppercase letter or special character.";
        return false; // Prevent form submission
    }
}

//Function to check form is not submitted without Entering Email or Name

function form_check() {
    var N = document.getElementById("name").value;
    var eml = document.getElementById("email").value;
    var formError = document.getElementById("form-check");

    if (!N) {
        formError.textContent = "Please provide your name.";
        return false;
    } else if (!eml) {
        formError.textContent = "Please provide your email.";
        return false;
    } else {
        formError.textContent = "";
    }
    return true;
}

// Attach event listener to the form submission
document.querySelector("form").onsubmit = function() {
    return validateForm() && spec_check() && form_check();
}