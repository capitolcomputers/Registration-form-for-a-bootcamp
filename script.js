const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Get Value
   const fnameValue = fname.value.trim();
   const lnameValue = lname.value.trim();
   const emailValue = email.value.trim();
   const passValue = pass.value.trim();

   if(fnameValue === '') {
    setError(fname, 'First Name cannot be empty');
   } else {
    // Add success class
    setSuccess(fname)
   }

   if(lnameValue === '') {
    setError(lname, 'Last Name cannot be empty');
   } else {
    // Add success class
    setSuccess(lname)
   }

   if(emailValue === '') {
    setError(email, 'Email Name cannot be empty');
   } else {
    // Add success class
    setSuccess(email)
   }

   if(passValue === '') {
    setError(pass, 'Password field cannot be empty');
   } else {
    // Add success class
    setSuccess(pass)
   }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
    formControl.style.marginBottom = '1.5rem';
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}