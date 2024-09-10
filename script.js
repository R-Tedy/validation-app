let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');
let formError = document.getElementById('formError');

function validateName() {
  let name = document.getElementById('name').value;

  if (name.length == 0) {
    nameError.innerHTML="Kindly input your name";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Enter full name';
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone(){
  let phone = document.getElementById('phone').value;

  if (phone.length == 0){
    phoneError.innerHTML = 'Kindly input your phone No.';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Input full number";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'input valid number';
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;

}

function validateEmail(){
  let email = document.getElementById('email').value;

  if (email.length == 0){
    emailError.innerHTML = 'Kindly input email';
    return false;
  
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'input valid email';
    return false;
  }

  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;

}

function validateMessage(){
  let message = document.getElementById('message').value;
  let remainChar = 30 - message.length;

  if (message.length == 0){
    messageError.innerHTML = 'Kindly input a message';
    return false;
  }
  if (remainChar > 0){
    messageError.innerHTML = `${remainChar} Characters remaining`;
    return false;
  }

  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;

}

function validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    formError.style.display = 'block';
    formError.innerHTML = 'Kindly input data';
    setTimeout(function(){formError.style.display = 'none';},3000)
    return false;
  }

  // setTimeout(validateForm(), 3000);
}