const {
    validateSingleFileSize,
    validateFileSize,
    validateSingleMimeType,
    validateMimeTypes
} = require('../src/fileTypeValidation/filetypeValidation');

describe('File Validation Functions', () => {

    describe('validateSingleMimeType', () => {
        it('should return true for valid MIME type', () => {
            const file = { mimetype: 'application/pdf' };
            const allowedTypes = ['application/pdf', 'image/jpeg'];
            const result = validateSingleMimeType(file, allowedTypes);
            expect(result).toBe(true);
        });

        it('should return false for invalid MIME type', () => {
            const file = { mimetype: 'text/plain' };
            const allowedTypes = ['application/pdf', 'image/jpeg'];
            const result = validateSingleMimeType(file, allowedTypes);
            expect(result).toBe(false);
        });
    });

    describe('validateMimeTypes', () => {
        it('should validate multiple files and return correct response for valid and invalid MIME types', () => {
            const files = [
                { filename: 'file1.pdf', mimetype: 'application/pdf' },
                { filename: 'file2.jpeg', mimetype: 'image/jpeg' },
                { filename: 'file3.txt', mimetype: 'text/plain' }
            ];
            const allowedTypes = ['application/pdf', 'image/jpeg'];
            const result = validateMimeTypes(files, allowedTypes);
            expect(result).toEqual({
                'file1.pdf': true,
                'file2.jpeg': true,
                'file3.txt': false
            });
        });
    });

    describe('validateSingleFileSize', () => {
        it('should return true if file size is within limit', () => {
            const file = { size: 2 * 1024 * 1024 }; // 2 MB
            const maxSizeMB = 5;
            const result = validateSingleFileSize(file, maxSizeMB);
            expect(result).toBe(true);
        });

        it('should return false if file size exceeds limit', () => {
            const file = { size: 10 * 1024 * 1024 }; // 10 MB
            const maxSizeMB = 5;
            const result = validateSingleFileSize(file, maxSizeMB);
            expect(result).toBe(false);
        });
    });

    describe('validateFileSize', () => {
        it('should validate file sizes and return correct response for files within and over the limit', () => {
            const files = [
                { filename: 'file1.pdf', size: 2 * 1024 * 1024 }, // 2 MB
                { filename: 'file2.jpeg', size: 6 * 1024 * 1024 }, // 6 MB
                { filename: 'file3.txt', size: 4 * 1024 * 1024 } // 4 MB
            ];
            const maxSizeMB = 5;
            const result = validateFileSize(files, maxSizeMB);
            expect(result).toEqual({
                'file1.pdf': true,
                'file2.jpeg': false,
                'file3.txt': true
            });
        });
    });

});
