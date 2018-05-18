var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var phoneNumberInput = document.getElementById("phoneNumber");

document.getElementById("sendButton").addEventListener("click", function() {
    console.log("Checking database for given user details: ");
    console.log("First Name: " + firstNameInput.value);
    console.log("Last Name: " + lastNameInput.value);
    console.log("Phone Number: " + phoneNumberInput.value);

    // check for existence in the google sheets 


    // var url = "https://docs.google.com/forms/d/e/1FAIpQLSddXGl58TEoMi4sGEaDC5R4F7tPcDUuIlf2-Gt03yJVAkR2nA/	viewform?entry.37100989=" + firstNameInput.value + "&entry.1071438744=" + lastNameInput.value + "&entry.1355554313=" + phoneNumberInput.value; 
    // window.location.href = url; 


    var url = "https://docs.google.com/forms/d/e/1FAIpQLSdj0OV0Axz4wEQIwjOGVZhyqA_NTr_IChGPIcZd4er0rDWAAg/viewform?entry.339946888=" + 
    firstNameInput.value + 
    "&entry.259180344=" + 
    lastNameInput.value + 
    "&entry.1768999351=" + 
    phoneNumberInput.value; 

    window.location.href = url; 


});




