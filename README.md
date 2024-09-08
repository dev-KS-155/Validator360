# Validotor360

Validotor360 is a robust validation package that ensures data integrity by checking required fields, such as strings, objects, arrays, numbers, and more, to ensure they are not null, undefined, or empty. It also validates specific formats for emails, passwords, and phone numbers.

## Installation

To install the package, run:

```bash
npm install validotor360

```
## Usage
You can import any of these functions based on your needs:
``` 
const { 
  singleEmptyValidation, 
  validateAllFields, 
  validateEmail, 
  validatePhone, 
  validateURL, 
  validatePassword 
} = require("validotor360");

```

## Function Descriptions:
## 1. singleEmptyValidation
Purpose: Validates if a single field is empty, null, or undefined.
#### Input:
 - ```value``` (the value to check)
 - ```fieldName``` (the name of the field)
### Example:
```
const response = singleEmptyValidation(value, "nameOfVariable");
```
#### Output:
- Returns : ``` "{fieldName} is required" ``` if empty.
- Returns : ``` null ``` if the field is valid.
  

## 2. validateAllFields
Purpose: Validates all fields in an object, checking if any are empty, null, or undefined.
#### Input
- ``` data``` (an object with key-value pairs where keys are field names and values are their respective values)

### Example
```
const data = {
  stringFieldName: "someValue",
  arrayFieldName: [1, 2, 3],
  numberFieldName: 123
};
const response = validateAllFields(data);
```
#### Output:
- Returns an object with errors like:
``` 
{
  fieldName1: "fieldName1 is required",
  fieldName2: "fieldName2 is required"
}
```

## 3. validateEmail
Purpose: Validates the format of an email address.
#### Input:
- ```email```  (the email address to validate)

### Example:
```
const response = validateEmail(email);
```
#### Output:
- Returns : ```true``` if the email format is correct.
- Returns : ``` false``` if the email format is incorrect.

## 4. validatePhone
Purpose: Validates if the phone number format is correct.
#### Input:
- ```phone``` (the phone number to validate)

### Example:
```
const response = validatePhone(phone);
```
#### Output:
- Returns : ```true``` if the phone number format is correct.
- Returns : ``` false``` if the phone number format is incorrect.

## 5. validateURL
Purpose: Validates if the URL format is correct.
#### Input:
- ```url``` (the URL to validate)

### Example:
```
const response = validateURL(url);
```
#### Output:
- Returns : ```true``` if the URL format is correct.
- Returns : ``` false``` if the URL format is incorrect.

## 6. validatePassword
Purpose: Validates if the password format meets the required criteria (e.g., length, special characters, etc.).
#### Input
- ```password``` (the password to validate)

### Example:
```
const response = validatePassword(password);
```
#### Output:
- Returns : ```true``` if the password format is correct.
- Returns : ``` false``` if the password format is incorrect.



