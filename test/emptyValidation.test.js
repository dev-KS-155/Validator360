const { singleEmptyValidation, validateAllFields } = require('../src/emptyValidation/emptyValidation');
const isEmpty = require('../src/emptyValidation/emptyChecker');

// Mock the isEmpty function
jest.mock('../src/emptyValidation/emptyChecker');

describe('Validation Functions', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        isEmpty.mockClear();
    });

    describe('singleEmptyValidation', () => {
        it('should return a required message if value is empty and no custom message is provided', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const result = singleEmptyValidation('   ', 'FieldName', '');
            expect(result).toBe('FieldName is required');
        });

        it('should return a custom message if value is empty and a custom message is provided', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const result = singleEmptyValidation('   ', 'FieldName', 'Custom message');
            expect(result).toBe('Custom message');
        });

        it('should return null if value is not empty', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const result = singleEmptyValidation('Value', 'FieldName', '');
            expect(result).toBeNull();
        });
    });

    describe('validateAllFields', () => {
        it('should return an errors object with error messages for empty fields', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const data = {
                field1: '   ',
                field2: 'Value',
                field3: '   '
            };

            const result = validateAllFields(data, 'Custom message');
            expect(result).toEqual({
                field1: 'Custom message',
                field3: 'Custom message'
            });
        });

        it('should return null if no fields are empty', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const data = {
                field1: 'Value1',
                field2: 'Value2'
            };

            const result = validateAllFields(data, '');
            expect(result).toBeNull();
        });

        it('should return an errors object with default messages when no custom message is provided', () => {
            isEmpty.mockImplementation(value => value.trim() === '');

            const data = {
                field1: '   ',
                field2: 'Value'
            };

            const result = validateAllFields(data, '');
            expect(result).toEqual({
                field1: 'field1 is required'
            });
        });
    });
});
