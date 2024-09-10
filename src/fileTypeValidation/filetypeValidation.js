
const validateSingleMimeType = (file, allowedTypes) => {
    const mimeType = file.mimetype;
    return allowedTypes.includes(mimeType);
}

const validateMimeTypes = (files, allowedTypes) => {
    const response = {};
    files.forEach((file) => {
        const isValid = validateSingleMimeType(file, allowedTypes);
        response[file.filename] = isValid;
    });
    return response;
}

const validateSingleFileSize = (file, maxSizeMB) => {
    const fileSizeMB = file.size / (1024 * 1024);
    return fileSizeMB <= maxSizeMB;
}

const validateFileSize = (files, maxSizeMB) => {
    const response = {};
    files.forEach((file) => {
        const isValid = validateSingleFileSize(file, maxSizeMB);
        response[file.filename] = isValid;
    });
    return response;
}

module.exports = {
    validateSingleFileSize,
    validateFileSize,
    validateSingleMimeType,
    validateMimeTypes
};
