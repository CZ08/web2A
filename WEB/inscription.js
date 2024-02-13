var formElement=document.getElementById("form")
var nameElement=document.getElementById("Nom")
var prenomElement=document.getElementById("prenom")
var elementdate= document.getElementById("date_naissance")
var elementemail=document.getElementById("email")
formElement.addEventListener("submit",function(event){
                                                         event.preventDefault()
                                                         validateName()
                                                         validerDateOfBirth()
                                                         validatePrenom()
                                                        validatemail()})    

function validerDateOfBirth() 
{
    var elementvalue= new Date(elementdate.value)
    const dateAujourdhui=new Date();
    if(elementvalue>=dateAujourdhui)
        dateError.innerHTML="<span style='color :red'>please select a date that is before today</span>"
    else
    dateError.innerHTML="<span style='color :green'>Correct</span>"
}

function validateName()
{
    var NameValue = nameElement.value ;
    var pattern =/^[a-z A-Z]+$/
    if(!NameValue.match(pattern)){
        nameError.innerHTML="<span style='color :red'> nom ne doit contenir que des lettres et doit avoir au minimum 1 lettre </span>"
    }else
    {
        nameError.innerHTML="<span style='color :green'>Correct</span>"
    }
}
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
var emailInput = document.getElementById("emailInput");
var validationMessage = document.getElementById("emailValidationMessage");
emailInput.addEventListener("keyup", function() {
    var email = emailInput.value;
    if (validateEmail(email)) {
        validationMessage.textContent = "Email is valid";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "Email is invalid";
        validationMessage.style.color = "red";
    }
});
function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }

    var hasLowercase = /[a-z]/.test(password);
    var hasUppercase = /[A-Z]/.test(password);
    var hasDigit = /\d/.test(password);

    return hasLowercase && hasUppercase && hasDigit;
}
function validatetel()
{
    var telvalue=elementtel.value
    var pattern=/^[0-9]{8}$/
    if(!telvalue.match(pattern))
    {
        telError.innerHTML="<span style='color: red'>Numero de telephone doit contenir exactement 8 chiffres</span>";
    }else
    {
        telError.innerHTML="<span style='color: green'>Correct</span>";
    }
}