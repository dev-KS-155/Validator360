// Store for custom validators
const customValidators = {};

const addCustomValidator = (name, validatorFunction) => {
    if (typeof name !== 'string' || typeof validatorFunction !== 'function') {
        throw new Error('Invalid arguments: name must be a string and validatorFunction must be a function.');
    }
    customValidators[name] = validatorFunction;
};

const validateWithCustom = (name, value, ...args) => {
    if (customValidators[name]) {
        return customValidators[name](value, ...args);
    } else {
        throw new Error(`Validator "${name}" not found`);
    }
};

module.exports = {
    addCustomValidator,
    validateWithCustom
};
