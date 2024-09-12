const isEmpty = require("./emptyChecker");

const singleEmptyValidation = (value, fieldName, customMessage) => {
    if (isEmpty(value)) {
        return isEmpty(customMessage) === true ? `${fieldName} is required` : `${customMessage}`;
    }
    return null;
}

const validateAllFields = (data, customMessage) => {
    const errors = {};
    for (const [key, value] of Object.entries(data)) {
        const error = singleEmptyValidation(value, key, customMessage);
        if (error) {
            
            errors[key] = error;
        }
    }

    return Object.keys(errors).length ? errors : null;
}


module.exports = { singleEmptyValidation, validateAllFields };
