const { addCustomValidator, validateWithCustom } = require('../src/CustomValidators/customValidation');

describe('Custom Validator Functions', () => {
    describe('addCustomValidator', () => {
        it('should add a custom validator function successfully', () => {
            const customValidator = (value) => value.length > 5;
            addCustomValidator('lengthValidator', customValidator);

            const result = validateWithCustom('lengthValidator', 'example');
            expect(result).toBe(true);
        });

        it('should throw an error if name is not a string', () => {
            const customValidator = (value) => value.length > 5;
            expect(() => addCustomValidator(123, customValidator)).toThrow('Invalid arguments: name must be a string and validatorFunction must be a function.');
        });

        it('should throw an error if validatorFunction is not a function', () => {
            expect(() => addCustomValidator('invalidValidator', 'notAFunction')).toThrow('Invalid arguments: name must be a string and validatorFunction must be a function.');
        });
    });

    describe('validateWithCustom', () => {
        it('should return true when custom validator condition is met', () => {
            const isEven = (value) => value % 2 === 0;
            addCustomValidator('evenValidator', isEven);

            const result = validateWithCustom('evenValidator', 4);
            expect(result).toBe(true);
        });

        it('should return false when custom validator condition is not met', () => {
            const isEven = (value) => value % 2 === 0;
            addCustomValidator('evenValidator', isEven);

            const result = validateWithCustom('evenValidator', 3);
            expect(result).toBe(false);
        });

        it('should throw an error if the custom validator is not found', () => {
            expect(() => validateWithCustom('nonExistentValidator', 'test')).toThrow('Validator "nonExistentValidator" not found');
        });

        it('should pass extra arguments to the custom validator', () => {
            const minLengthValidator = (value, minLength) => value.length >= minLength;
            addCustomValidator('minLengthValidator', minLengthValidator);

            const result = validateWithCustom('minLengthValidator', 'hello', 5);
            expect(result).toBe(true);
        });
    });
});
