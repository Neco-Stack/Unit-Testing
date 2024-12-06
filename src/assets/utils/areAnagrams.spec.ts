import { areAnagrams } from './areAnagrams.ts';
import { factorial } from './areAnagrams.ts';
import { evenOdd } from './areAnagrams.ts';

describe('areAnagrams', () => {
    it('should return for two identical strings', () => {
        expect(areAnagrams('listen', 'listen')).toBe(true);
    }); 

    it('should return true for anagrams with different cases', () => {
        expect(areAnagrams('listen', 'Silent')).toBe(true);
    });

    it('should return true for anagrams with spaces', () => {
        expect(areAnagrams('a gentleman', 'elegant man'));
    });

    it('should return false for strings that are not anagrams', () => {
        expect(areAnagrams('hello', 'world')).toBe(false);
    });

    it('should return false for strings of different lenghts', () => {
        expect(areAnagrams('abc', 'ab')).toBe(false);
    });  
});

describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    })

    it('should return 1 for factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    })

    it('should return 2 for factorial of 2', () => {
        expect(factorial(2)).toBe(2);
    });

    it('should return 6 for factorial of 3', () => {
        expect(factorial(3)).toBe(6)
    });
});

describe('evenOdd', () => {
    it('should return an array with "Even" and "Odd" for n = 1', () => {
        expect(evenOdd(1)).toEqual(['Odd'])
    });

    it('should return an array with "Even" and "Odd" for n = 2', () => {
        expect(evenOdd(2)).toEqual(['Odd', 'Even']);
    });

    it('should return an array with "Even" and "Odd" for n = 3', () => {
        expect(evenOdd(3)).toEqual(['Odd', 'Even', 'Odd'])
    }); 

    it('should return an empty array for n = 0', () => {
        expect(evenOdd(0)).toEqual([]);
    });

    it('should handle negative numbers by returning an empty array', () => {
        expect(evenOdd(-5)).toEqual([]);
    });
}); 





