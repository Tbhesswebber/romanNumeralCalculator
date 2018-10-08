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
  /**
   * TODO: Look for ways to optimize... nestedLoops === NOBUENO
   *    Maybe cache values on the server or memoize?
   */
  let [roman, current] = ['', arabic];
  const pairs = Object.entries(arabicToRoman);
  while (current > 0) {
    // use a for loop for the break statement;
    for (let i = 0; i < pairs.length; i += 1) {
      const [currentArabic, currentRoman] = pairs[i];
      // when the current arabic is 1000, we are at the top of the known number system - aka infinity.
      const nextArabic = pairs[i + 1] ? pairs[i + 1][0] : Infinity;
      if (+currentArabic <= current && +nextArabic > current) {
        roman += currentRoman;
        current -= currentArabic;
        // want to update current within our while loop rather than continue comparing against values that fail the condition
        break;
      }
    }
  }
  return roman;
}

export function parseRoman(roman = '') {
  // ! this implementation will parse ANY roman numeral, not just valid ones.
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
