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
function spec_check(){
    var password = document.getElementById("password").value;
    var Spass=document.getElementById("spec-check");

    const hasUpCase=/[A-Z]/.test(password);
    const hasSpChar=/!@#$%^/.test(password);
    if (!hasUpCase && !hasSpChar) {
        Spass.textContent = 'Password must contain at least one uppercase letter or special character.';
        return false; // Prevent form submission
    }
}
