export function getCharacterFrequency(s: string): Record<string, number> {
    const frequency: Record<string, number> = {};
    const normalizedString = s.toLowerCase(); 
    for (const char of normalizedString) {
        if (char.match(/[a-z0-9]/))
        if (char in frequency) {
            frequency[char] += 1; 
        } else {
            frequency[char] = 1;
        }
    }
    return frequency
};