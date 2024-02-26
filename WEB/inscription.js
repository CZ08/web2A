var formElement = document.getElementById("Form");
  var nomElement = document.getElementById("nom");
  var prenomElement = document.getElementById("prenom");
  var emailElement = document.getElementById("email");
  var telElement = document.getElementById("telephone");
  var dateElement = document.getElementById("dateNaissance");
  var passwordElement = document.getElementById("motDePasse");

  formElement.addEventListener("submit", function(event){
    event.preventDefault();
    ValidateForm();
  })

  function ValidateForm(){
      var nomValue = nomElement.value;
      var prenomValue = prenomElement.value;
      var telValue = telElement.value;
      var dateValue = dateElement.value; 
      var passwordValue = passwordElement.value;
      
      var nomError = document.getElementById("nomError");
      var prenomError = document.getElementById("prenomError");
      var telError = document.getElementById("telError");
      var dateError = document.getElementById("dateError");
      var passwordError = document.getElementById("passwordError");

      var nomCorrect = document.getElementById("nomCorrect");
      var prenomCorrect = document.getElementById("prenomCorrect");
      var telCorrect = document.getElementById("telCorrect");
      var dateCorrect = document.getElementById("dateCorrect");
      var passwordCorrect = document.getElementById("passwordCorrect");

      var patternNom = /^[a-z A-Z]+$/;
      var patternPrenom = /^[a-z A-Z]+$/;
      var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var patternTel = /^\d{8}$/;
      var patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if(!nomValue.match(patternNom)){
        nomError.innerHTML = "Nom incorrect";
        nomCorrect.innerHTML="";
      }else{
        nomCorrect.innerHTML = "Nom correct";
        nomError.innerHTML = "";
      }

      if(!prenomValue.match(patternPrenom)){
        prenomError.innerHTML="Prenom incorrect";
        prenomCorrect.innerHTML="";
      }else{
        prenomCorrect.innerHTML="Prenom correct";
        prenomError.innerHTML="";
      }

      if(!telValue.match(patternTel)){
        telError.innerHTML="Tel incorrect";
        telCorrect.innerHTML="";
      }else{
        telCorrect.innerHTML="Prenom correct";
        telError.innerHTML="";
      }

      

      var currentDate = new Date();
      var inputDate = new Date(dateValue);

      if (isNaN(inputDate) || inputDate >= currentDate) {
        dateError.innerHTML = "Date incorrect";
        dateCorrect.innerHTML = "";
      }else{
        dateCorrect.innerHTML = "Date correct";
        dateError.innerHTML = "";
      }

      if(!passwordValue.match(patternPassword)){
        passwordError.innerHTML = "Password incorrect";
        passwordCorrect.innerHTML = "";
      }else{
        passwordCorrect.innerHTML = "Password correct";
        passwordError.innerHTML = "";
      }
      
  }

  emailElement.addEventListener("keyup",function(){
    validateMail();
  })

  function validateMail(){
    var emailError = document.getElementById("emailError");
    var emailCorrect = document.getElementById("emailCorrect");
    var emailValue = emailElement.value;
    //var mailPattern = /^\S+@esprit.tn$/;
    var mailPattern = /^[a-z A-Z 0-9 _%.+-]+@esprit.tn$/

    if(!emailValue.match(mailPattern)){
      emailError.innerHTML = "Mail inccorect";
      emailCorrect.innerHTML = "";
    }else{
      emailCorrect.innerHTML = "Mail correct";
      emailError.innerHTML = "";
    }
  }
