
const validateEmail = (email, userRegix) => {
    const emailRegex = userRegix || new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    return emailRegex.test(email) // if email matches then give true
}

const validatePhone = (phone_number, userRegix) => {
    const phoneRegex = userRegix || new RegExp('^(\\+(?!1)\\d{1,3})?[1-9]\\d{9,}$');
    return phoneRegex.test(phone_number);
}

const validateURL = (url, userRegix) => {
    const urlPattern = userRegix || new RegExp('^(https?:\\/\\/)[^\\s$.?#].[^\\s]*$', 'i');
    return urlPattern.test(url);
}

const validatePassword = (password, userRegix) => {
    // password must be at least 8 characters long,at least one digit, and include one special character (!@#$%^&*).
    const passwordRegex = userRegix || new RegExp('^(?=.*[!@#$%^&*_?])(?=.*\\d)[A-Za-z\\d!@#$%^&*_?]{8,}$');
    return passwordRegex.test(password);
}

const validateDate = (date, userRegix) => {
    const datePattern = userRegix || new RegExp('^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/\\d{4}$');
    return datePattern.test(date);
}

const validateCreditCard = (creditCard, userRegix) => {
    const cardPattern = userRegix || new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|2(?:014|149)[0-9]{11})$');
    return cardPattern.test(creditCard);
}

module.exports = {
    validateEmail,
    validatePhone,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCard
};
