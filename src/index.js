
const { singleEmptyValidation, validateAllFields } = require("./emptyValidation/validateEmpty");
const { validateEmail, validatePhone, validateURL, validatePassword } = require('./typeValidation/regixOfType');

module.exports = {
  singleEmptyValidation,
  validateAllFields,
  validateEmail,
  validatePhone,
  validateURL,
  validatePassword
};
