
let pass = document.querySelector("#for2");


pass.onblur=function () {
    let pass1 = document.querySelector("#check2");
      
        pass1.innerHTML="invalid password";
    
}

let email = document.querySelector("#for3");



email.onblur=function () {
    let email1 = document.querySelector("#check1");
    
  email1.innerHTML="invalid email id";
    
}

function check() {
    let checkOpen = document.querySelector(".wrapper");
    checkOpen.style.display = "block";
}
function exit() {
    let checkOpen = document.querySelector(".wrapper");
    checkOpen.style.display = "none";
}
