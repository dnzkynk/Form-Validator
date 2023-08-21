const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');

function error(input , message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText  = message;
    div.className = 'invalid-feedback';
}
function succes(input) {
    input.className = 'form-control is-valid' ;
}
function checkEmail(input) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    succes(input);
  }else {
    error(input, "Hatalı mail adresi");
  }
    
    
}


// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     if(username.value == '') {
//         error(username , "username gerekli");
//     } else {
//         succes(username);
//     }
//     if(email.value == '') {
//         error(email, "email gerekli");
//     }else if (!validateEmail(email)){
//         error(email, "Girdiğiniz email hatalıdır");
//     }
//       else {
//         succes(email);
//         }
//     if(password.value == '') {
//         error(password,"password gerekli");
//     }else {
//         succes(password);
//     }
//     if(repassword.value == '') {
//         error(repassword,"repassword gerekli");
//     }else {
//         succes(repassword);
//     }
    
// });
function checkRequired(inputs) {
    inputs.forEach(function(input){
        if(input.value === '') {
            error(input,`${input.id} bilgisi zorunludur`);
        }
        else {
            succes(input);
        }
    });
}
function checkLength ( input,min,max) {
    if(input.value.length < min || input.value.length > max) {
        error(input,`${input.id}  ${min}-${max} karakter olmalıdır `);
    }
    
    else {
        succes(input);
    }
    
}
function checkPassword (input1,input2) {
    if(!input2.value == "") {
    if (input1.value == input2.value) {
        succes(input2);
    } else {
        error(input2 , "Parola uyuşmamaktadır");
    }
}
}
function checkPhone(input) {
    if(!input.value == "") {
    var exp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(!exp.test(input.value)) {
    error(input,"Telefon 10 karakterli olmalıdır");
    }
    else {
        succes(input);
    }
}
    
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPassword(password,repassword);
    checkPhone(phone)

});
