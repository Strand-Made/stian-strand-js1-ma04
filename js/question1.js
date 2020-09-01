const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateMyForm);

function validateMyForm(event) {
    event.preventDefault();
    console.log("The form has left the building");

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block"; 
    }

}

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= 5) {
        return true
    } else {
        return false; 
    }
}