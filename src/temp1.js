const { validateEmail, validatePhone, validateURL, validatePassword } = require('validator360/regexFormatValidation');
const { singleEmptyValidation, validateAllFields } = require('validator360/emptyValidation');
const { addCustomValidator, validateWithCustom } = require('validator360/customValidation');


// const {
//     customValidation,
//     emptyValidation,
//     filetypeValidation,
//     regexFormatValidation,
// } = require('validator360');

// const { singleEmptyValidation, validateAllFields } = emptyValidation;
// const { validateEmail, validatePhone, validateURL, validatePassword } = regexFormatValidation;
// const { addCustomValidator, validateWithCustom } = customValidation


const data = {
    email: "krishnasumit155@gmail.com",
    phone: "92017387",
    url: "https//www.google.com",
    password: "122HGFytf#ksfif",
    name: ""
}

const email = "krishnasumt155@gmail.com";
console.log(validateEmail(email));
console.log(singleEmptyValidation("", "name", "it is required"));

const isEven = (num) => {
    return num % 2 == 0 ? true : false;
}

const hh = addCustomValidator("isEven", isEven);
console.log(validateWithCustom("isEven", 10));

console.log("----------------------------------------");

console.log(validateEmail(data.email));
console.log(validatePhone(data.phone));
console.log(validateURL(data.url));
console.log(validatePassword(data.password));

console.log(validateAllFields(data, "All field are mendetry"));

