# Validotor360

Validotor360 is a robust validation package that ensures data integrity by checking required fields, such as strings, objects, arrays, numbers, and more, to ensure they are not null, undefined, or empty. It also validates specific formats for emails, passwords, and phone numbers.

## Installation

To install the package, run:

```bash
npm install validotor360

```
## Validotor360 Service

| NameOfService       | All Service                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------|
| `customValidation` | `addCustomValidator`, `validateWithCustom`                                                          |
| `emptyValidation`  | `singleEmptyValidation`, `validateAllFields`                                                        |
| `filetypeValidation`   | `validateSingleFileSize`, `validateFileSize`, `validateSingleMimeType`, `validateMimeTypes`         |
| `regexFormatValidation`  | `validateEmail`, `validatePhone`, `validateURL`, `validatePassword`, `validateDate`, `validateCreditCard` |



## Usage
You can import any of these functions based on your needs:
``` 
const { 
  customValidation, 
  emptyValidation, 
  filetypeValidation, 
  regexFormatValidation, 
} = require('validator360');

// Example: Using regexValidation
const { validateEmail } = regexValidation;
// Example: Using fileValidation
const {validateSingleFileSize , validateSingleMimeType} = fileValidation
``` 
Alternatively, you can use direct imports:

```
const { validateEmail } = require('validator360/regexFormatValidation');
const { singleEmptyValidation } = require('validator360/emptyValidation');

```
## Function Descriptions

| Function Name            | Purpose                                                                                                     | Input                                                                                  | Example                                                                                                                                                        | Output                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `singleEmptyValidation` | Validates if a single field is empty, null, or undefined.                                                 | - `value` (the value to check)<br>- `fieldName` (the name of the field)<br>- `customMessage` (Optional) | `const response = singleEmptyValidation(value, "fieldName", "customMessage");`                                                                             | - Returns: `"{fieldName} is required"` if empty.<br>- Returns: `null` if valid.             |
| `validateAllFields`      | Validates all fields in an object, checking if any are empty, null, or undefined.                           | - `data` (an object with key-value pairs)<br>- `customMessage` (Optional)               | `const data = { stringFieldName: "someValue", arrayFieldName: [1, 2, 3], numberFieldName: 123 };<br>const response = validateAllFields(data, "customMessage");` | - Returns an object with errors like:<br>```{ fieldName1: "fieldName1 is required", fieldName2: "fieldName2 is required" }``` |
| `validateEmail`          | Validates the format of an email address.                                                                  | - `email` (the email address to validate)<br>- `userRegix` (Optional)                  | `const response = validateEmail(email, userRegix);`                                                                                                         | - Returns: `true` if correct format.<br>- Returns: `false` if incorrect format.             |
| `validatePhone`          | Validates if the phone number format is correct.                                                           | - `phone` (the phone number to validate)<br>- `userRegix` (Optional)                   | `const response = validatePhone(phone, userRegix);`                                                                                                         | - Returns: `true` if correct format.<br>- Returns: `false` if incorrect format.             |
| `validateURL`            | Validates if the URL format is correct.                                                                    | - `url` (the URL to validate)<br>- `userRegix` (Optional)                              | `const response = validateURL(url, userRegix);`                                                                                                             | - Returns: `true` if correct format.<br>- Returns: `false` if incorrect format.             |
| `validatePassword`       | Validates if the password format meets the required criteria (e.g., length, special characters).            | - `password` (the password to validate)<br>- `userRegix` (Optional)                    | `const response = validatePassword(password, userRegix);`                                                                                                   | - Returns: `true` if correct format.<br>- Returns: `false` if incorrect format.             |
| `validateDate`           | Validates if the date format is correct.                                                                   | - `date` (the date to validate)<br>- `userRegix` (Optional)                            | `const response = validateDate(date, userRegix);`                                                                                                           | - Returns: `true` if correct format.<br>- Returns: `false` if incorrect format.             |
| `validateSingleMimeType` | Validates if a single file's MIME type is allowed.                                                         | - `file` (the file to check)<br>- `allowedTypes` (an array of allowed MIME types)     | `const isValid = validateSingleMimeType(file, ['image/jpeg', 'image/png']);`                                                                             | - Returns: `true` if MIME type is allowed.<br>- Returns: `false` if MIME type is not allowed. |
| `validateMimeTypes`      | Validates the MIME types of multiple files.                                                                | - `files` (an array of files)<br>- `allowedTypes` (an array of allowed MIME types)    | `const response = validateMimeTypes(files, ['image/jpeg', 'image/png']);`                                                                                 | - Returns an object with filenames and validity status:<br>```{ filename1: true, filename2: false }``` |
| `validateSingleFileSize` | Validates if a single file's size is within the allowed limit.                                            | - `file` (the file to check)<br>- `maxSizeMB` (maximum allowed file size in MB)       | `const isValid = validateSingleFileSize(file, 5);`                                                                                                         | - Returns: `true` if file size is within limit.<br>- Returns: `false` if file size exceeds limit. |
| `validateFileSize`       | Validates the sizes of multiple files.                                                                     | - `files` (an array of files)<br>- `maxSizeMB` (maximum allowed file size in MB)      | `const response = validateFileSize(files, 5);`                                                                                                            | - Returns an object with filenames and validity status:<br>```{ filename1: true, filename2: false }``` |
| `addCustomValidator`    | Adds a custom validation function to the store.                                                           | - `name` (name of the custom validator)<br>- `validatorFunction` (function to validate) | `addCustomValidator('customName', customFunction);`                                                                                                        | - No return value. Adds a custom validator to the store.                                     |
| `validateWithCustom`    | Validates a value using a custom validator from the store.                                               | - `name` (name of the custom validator)<br>- `value` (value to validate)<br>- `...args` (additional arguments) | `const response = validateWithCustom('customName', value, ...args);`                                                                                     | - Returns the result of the custom validator function.                                        
