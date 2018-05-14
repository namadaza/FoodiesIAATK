var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var phoneNumberInput = document.getElementById("phoneNumber");

document.getElementById("sendButton").addEventListener("click", function() {
    console.log("Checking database for given user details: ");
    console.log("First Name: " + firstNameInput.value);
    console.log("Last Name: " + lastNameInput.value);
    console.log("Phone Number: " + phoneNumberInput.value);
});



