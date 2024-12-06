import { getCharacterFrequency } from "./getcharacterfrequenzy";

describe('getCharacterFrequency', () => {
    test('should return an empty object for an empty string', () => {
        expect(getCharacterFrequency('')).toEqual({})
    });
    test('should return character frequency for a simple string', () => {
        expect(getCharacterFrequency('hello')).toEqual({h: 1, e: 1, l: 2, o:1});
    });
    test('should count characters case-insensitevely', () => {
        expect(getCharacterFrequency('Aab')).toEqual({a: 2, b: 1});
    });
    test('should return character frequency for a string with repeated characters', () => {
        expect(getCharacterFrequency('aab')).toEqual({a: 2, b: 1});
    });
    test('should ignore spaces when counting characters', () => {
        expect(getCharacterFrequency('a b c a')).toEqual({a: 2, b: 1, c: 1});
    })
    test('should return an empty object for a string with only special characters', () => {
        expect(getCharacterFrequency('@#$%*()')).toEqual({});
    });
});