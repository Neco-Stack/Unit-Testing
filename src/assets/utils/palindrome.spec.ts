import { checkPalindrome } from './palindrome';

describe('checkPalidrome', () => {
    test('should return true for a simple palidrome', () => {
        expect(checkPalindrome('radar')).toBe(true);
    }); 
    test('should return for a complex palindrome', () => {
        expect(checkPalindrome('A man a plan a canal Panama')).toBe(true);
    });
    test('should return false for a non-palidrome', () => {
        expect(checkPalindrome('hello')).toBe(false);
    });
    test('should return true for an empty string', () => {
        expect(checkPalindrome('')).toBe(true);
    });
    test('should return true for a string with special characters', () => {
        expect(checkPalindrome('!!@#level##!!')).toBe(true);
    });

});
