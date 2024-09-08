const isEmpty = require("./emptyChecker");
const singleEmptyValidation = (value, fieldName) => {
  if (isEmpty(value)) {
    return `${fieldName} is required`;
  }
  return null;
};
const validateAllFields = data => {
  const errors = {};
  for (const [key, value] of Object.entries(data)) {
    const error = singleEmptyValidation(value, key);
    if (error) {
      errors[key] = error;
    }
  }
  return Object.keys(errors).length ? errors : null;
};
module.exports = {
  singleEmptyValidation,
  validateAllFields
};