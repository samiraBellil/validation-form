const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const adress = document.querySelector('#adress');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


// const conditions = {
//   firstName: /^[a-zA-Z]{2,}/,
//   lastName: /[a-z]/,
//   address: /[a-z]/,
//   email: /[a-zA-Z0-9]{3,}@[a-z]/,
//   password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,

// }



firstName.addEventListener('keyup', function (e) {
  let  InputName = /^[a-z]{2,}/
 validate(e, e.target, InputName)
})
lastName.addEventListener('keyup', function (e) {
  let InputName = /[a-z]/
  validate(e, e.target, InputName)
})
adress.addEventListener('keyup', function (e) {
  let InputName = /[a-z]/
  validate(e, e.target, InputName)
})
email.addEventListener('keyup', function (e) {
  let InputName = /[a-zA-Z0-9]{3,}@[a-z]/
  validate(e, e.target, InputName)
})
password.addEventListener('keyup', function (e) {
  let InputName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  validate(e, e.target, InputName)
})


function validate(e, x, y) {
  e.preventDefault()
  if(x){
  let isvalid = y.test(x.value)

  if (isvalid) {
    x.classList.add('valid')
    x.classList.remove('invalid')
  }
  else {
    x.classList.add('invalid')
  }
}
else if(document.querySelector('.invalid')) {
  alert('Check your infos')
}
}

document.querySelector('.form-demo').addEventListener('submit', validate)












