const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

//Prevent the Submit
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(firstName.value  == ''){
        showError(firstName,'First Name is Required!');
    }
    else{
        showSuccess(firstName);
    }
    if(lastName.value  == ''){
        showError(lastName,'Last Name is Required!');
    }
    else{
        showSuccess(lastName);
    }
    if(email.value  == '' || email.value.indexOf('@')== -1){
        showError(email,'Email is Required!');
    }
    else{
        showSuccess(email);
    }
})