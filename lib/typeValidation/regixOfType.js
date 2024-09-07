const validateEmail = email => {
  const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  return emailRegex.test(email); // if email matches then give true
};
const validatePhone = phone_number => {
  const phoneRegex = new RegExp('^(\\+(?!1)\\d{1,3})?[1-9]\\d{9,}$');
  return phoneRegex.test(phone_number);
};
const validateURL = url => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};
const validatePassword = password => {
  // password must be at least 8 characters long,at least one digit, and include one special character (!@#$%^&*).
  const passwordRegex = new RegExp('^(?=.*[!@#$%^&*_?])(?=.*\\d)[A-Za-z\\d!@#$%^&*_?]{8,}$');
  return passwordRegex.test(password);
};
module.exports = {
  validateEmail,
  validatePhone,
  validateURL,
  validatePassword
};