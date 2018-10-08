/**
 * @see https://www.roman-numerals.org/subtract.html
 * Only certain subtractions are valid within roman numerals.
 */

const romanToArabic = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const arabicToRoman = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

export function parseArabic(arabic = 0) {
  let [roman, current] = ['', arabic];
  const pairs = Object.entries(arabicToRoman);
  while (current > 0) {
    // use a for loop for the break statement;
    for (let i = 0; i < pairs.length; i += 1) {
      const [currentArabic, currentRoman] = pairs[i];
      const nextArabic = pairs[i + 1] ? pairs[i + 1][0] : Infinity;
      if (+currentArabic <= current && +nextArabic > current) {
        roman += currentRoman;
        current -= currentArabic;
        break;
      }
    }
  }
  return roman;
}

// ! this implementation will parse ANY roman numeral, not just valid ones.
export function parseRoman(roman = '') {
  return roman.split('').reduce((arabic, numeral, index, fullRoman) => {
    const currentValue = romanToArabic[numeral];
    const nextNumeral = fullRoman[index + 1];
    const nextValue = romanToArabic[nextNumeral];
    if (currentValue < nextValue) {
      return arabic - currentValue;
    }
    return arabic + currentValue;
  }, 0);
}
