
 var formSignin = document.getElementById("form-sign");
 var formregister = document.getElementById("form-register");
 var bodyCon = document.getElementById("bodyContaner");
 var full = document.getElementById("full");




function sand(){alert("this is Get Started");}


 function ShowSigninFrom() {
     formSignin.classList.add("show-form-signin");
     bodyCon.style.pointerEvents = "none";
     full.style.opacity = 0.8;
}

function HideRegisterFrom() {
     formSignin.classList.remove("show-form-signin");
     bodyCon.style.pointerEvents = "none";
     full.style.opacity = 0;
}
 function ShowRegisterFrom() {
     formregister.classList.add("show-form-register");
     bodyCon.style.pointerEvents = "visible";
     full.style.opacity = 0.8;
     
}

function HideSigninFrom() {
     formregister.classList.remove("show-form-register");
     bodyCon.style.pointerEvents = "none";
     full.style.opacity = 0;
}















