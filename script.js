let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

function validateForm() {
    // Clear previous error messages
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('phoneError').innerText = "";
    document.getElementById('nicError').innerText = "";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let nic = document.getElementById('nic').value;
    let isValid = true;

    // Empty value validation
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        isValid = false;
    }

    // Phone number validation (10 digits)
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = "Phone number must be 10 digits";
        isValid = false;
    }

    // Sri Lankan NIC validation
    let nicPattern = /^\d{9}[vVxX]$/;
    if (!nicPattern.test(nic)) {
        document.getElementById('nicError').innerText = "Invalid NIC format. Format: 123456789V";
        isValid = false;
    }

    return isValid; // Only submit form if all validations pass
}
