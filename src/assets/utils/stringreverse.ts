export function cleanAndReverseString(s: string): string {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, ' '); 
    return cleaned.split('').reverse().join('');
}