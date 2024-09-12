const {
    validateEmail,
    validatePhone,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCard
} = require('../src/RegexFormatValidation/regexFormatValidation');

describe('Validation Functions', () => {
    describe('validateEmail', () => {
        it('should return true for a valid email', () => {
            expect(validateEmail('test@example.com')).toBe(true);
        });

        it('should return false for an invalid email', () => {
            expect(validateEmail('invalid-email')).toBe(false);
        });
    });

    describe('validatePhone', () => {
        it('should return true for a valid phone number', () => {
            expect(validatePhone('1234567890')).toBe(true);
        });

        it('should return false for an invalid phone number', () => {
            expect(validatePhone('12345')).toBe(false);
        });
    });

    describe('validateURL', () => {
        it('should return true for a valid URL', () => {
            expect(validateURL('https://www.example.com')).toBe(true);
        });

        it('should return false for an invalid URL', () => {
            expect(validateURL('invalid-url')).toBe(false);
        });
    });

    describe('validatePassword', () => {
        it('should return true for a valid password', () => {
            expect(validatePassword('Password1!')).toBe(true);
        });

        it('should return false for a password that is too short', () => {
            expect(validatePassword('Pass1!')).toBe(false);
        });
    });

    describe('validateDate', () => {
        it('should return true for a valid date', () => {
            expect(validateDate('12/31/2022')).toBe(true);
        });

        it('should return false for an invalid date', () => {
            expect(validateDate('31/12/2022')).toBe(false); // Using the wrong format
        });
    });

    describe('validateCreditCard', () => {
        it('should return true for a valid credit card number', () => {
            expect(validateCreditCard('4111111111111111')).toBe(true); // Valid Visa card
        });

        it('should return false for an invalid credit card number', () => {
            expect(validateCreditCard('1234567890123456')).toBe(false);
        });
    });
});
