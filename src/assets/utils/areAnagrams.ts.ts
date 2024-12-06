export function areAnagrams(string1: string, string2: string) {
    const normalize = (str: string): string => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(string1) === normalize(string2);
  };

export function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1; 
  }
  return n * factorial(n - 1);
};

export function evenOdd(n: number) {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push('Even');
    } else {
      result.push('Odd');
    }
  }
  return result;
};
