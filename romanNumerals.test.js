import { parseRoman, parseArabic } from './romanNumerals';

describe('parseRoman', () => {
  it('should be a function', () => {
    expect(parseRoman).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof parseRoman()).toBe('number');
  });

  it('should handle the additive property of roman numerals', () => {
    const one = parseRoman('I');
    const two = parseRoman('II');
    const oneHundredFifty = parseRoman('CL');
    const oneThousandFiveHundredFifteen = parseRoman('MDXV');
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(oneHundredFifty).toBe(150);
    expect(oneThousandFiveHundredFifteen).toBe(1515);
  });

  it('should handle the subtractive property of roman numerals', () => {
    const nine = parseRoman('IX');
    const ninetyNine = parseRoman('XCIX');
    const oneHundredNinety = parseRoman('CXC');
    const oneThousandFourHundredFortyNine = parseRoman('MCDXLIX');
    expect(nine).toBe(9);
    expect(ninetyNine).toBe(99);
    expect(oneHundredNinety).toBe(190);
    expect(oneThousandFourHundredFortyNine).toBe(1449);
  });
});

describe('parseArabic', () => {
  it('should be a function', () => {
    expect(parseArabic).toBeInstanceOf(Function);
  });

  it('should return a string', () => {
    expect(typeof parseArabic()).toBe('string');
  });

  it('should handle the additive property of roman numerals', () => {
    const one = parseArabic(1);
    const two = parseArabic(2);
    const oneHundredFifty = parseArabic(150);
    const oneThousandFiveHundredFifteen = parseArabic(1515);
    expect(one).toBe('I');
    expect(two).toBe('II');
    expect(oneHundredFifty).toBe('CL');
    expect(oneThousandFiveHundredFifteen).toBe('MDXV');
  });

  it('should handle the subtractive property of roman numerals', () => {
    const nine = parseArabic(9);
    const ninetyNine = parseArabic(99);
    const oneHundredNinety = parseArabic(190);
    const oneThousandFourHundredFortyNine = parseArabic(1449);
    expect(nine).toBe('IX');
    expect(ninetyNine).toBe('XCIX');
    expect(oneHundredNinety).toBe('CXC');
    expect(oneThousandFourHundredFortyNine).toBe('MCDXLIX');
  });
});
