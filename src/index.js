
const {
  addCustomValidator,
  validateWithCustom
} = require('./CustomValidators/customValidation');

const {
  singleEmptyValidation,
  validateAllFields
} = require('./emptyValidation/emptyValidation');

const {
  validateSingleFileSize,
  validateFileSize,
  validateSingleMimeType,
  validateMimeTypes
} = require('./fileTypeValidation/filetypeValidation');

// const generateRegix = require('./autoGenerateRegix/generateRegix');

const {
  validateEmail,
  validatePhone,
  validateURL,
  validatePassword,
  validateDate,
  validateCreditCard
} = require('./RegexFormatValidation/regexFormatValidation');


module.exports = {
  // Grouping related functionalities
  customValidation: {
    addCustomValidator,
    validateWithCustom
  },
  emptyValidation: {
    singleEmptyValidation,
    validateAllFields
  },
  filetypeValidation: {
    validateSingleFileSize,
    validateFileSize,
    validateSingleMimeType,
    validateMimeTypes
  },
  regexFormatValidation: {
    validateEmail,
    validatePhone,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCard
  },
  // autoGeneratedRegex: generateRegix
};
