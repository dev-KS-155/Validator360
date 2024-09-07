const { validateEmail, validatePhone, validateURL, validatePassword } = require("../typeValidation/regixOfType");

const { validateAllFields } = require("../emptyValidation/validateEmpty");

test('validates correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
});

test('rejects invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false);
});

test('validates correct phone number', () => {
    expect(validatePhone('1234567890')).toBe(true);
});

test('rejects invalid phone number', () => {
    expect(validatePhone('12345')).toBe(false);
});

test('validates correct URL', () => {
    expect(validateURL('http://example.com')).toBe(true);
});

test('rejects invalid URL', () => {
    expect(validateURL('invalid-url')).toBe(false);
});


test('validates password ', () => {
    expect(validatePassword('Example@66kjjk')).toBe(true);
})

test('reject invalid password', () => {
    expect(validatePassword("Fjhhb@")).toBe(false);
})


// check-empty user-field 
test('check all empty field types', () => {
    const data = {
        name: 'John Doe',
        profile: {},
        friends: [],
        phone: '',
    };
    const errors = validateAllFields(data);
    expect(errors).toHaveProperty('profile', 'profile is required');
    expect(errors).toHaveProperty('friends', 'friends is required');
    expect(errors).toHaveProperty('phone', 'phone is required');
});


