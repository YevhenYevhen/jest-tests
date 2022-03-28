const validateValue = require('./validateValue');



describe('validateValue', () => {
    test('should return true', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('should return true', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('should return true', () => {
        expect(validateValue(100)).toBe(true);
    })
    test('should return false', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('should return false', () => {
        expect(validateValue(101)).toBe(false);
    })
})