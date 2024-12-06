import { cleanAndReverseString } from "./stringreverse";

describe('cleanAndReverseString', () => {
    test('should reverse a simple string', () => {
        expect(cleanAndReverseString('hello')).toBe('olleh');
    });
    test('should reverse a string with numbers', () => {
        expect(cleanAndReverseString('hello3')).toBe('3olleh');
    });
    test('should return an empty string when input is empty', () => {
        expect(cleanAndReverseString('')).toBe('');
    });
    test('should return the same reversed string if no special characters are present', () => {
        expect(cleanAndReverseString('abc123')).toBe('321cba');
    });
});