const expect = require('expect');

/* 

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

 */

/**
 * @param {number} num
 * @return {string}
 */
// romanStack.splice(0,2);
var intToRoman = function(num) {
  if (isNaN(num) || num > 3999 || num < 1) return false;
  const romanStack = ['I', 'V', 'X', 'L', 'C', 'D', 'M'] 
  let res = [];
  while( num !== 0) {
    const one = romanStack[0];
    const five = romanStack[1];
    const ten = romanStack[2];
    const lastNum = num % 10;
    switch (lastNum) {
      case 1: 
        res.push(one);
        break;
      case 2: 
        res.push(one+one);
        break;
      case 3: 
        res.push(one+one+one);
        break;
      case 4: 
        res.push(one+five);
        break;
      case 5: 
        res.push(five);
        break;
      case 6: 
        res.push(five+one);
        break;
      case 7: 
        res.push(five+one+one);
        break;
      case 8: 
        res.push(five+one+one+one);
        break;
      case 9: 
        res.push(one+ten);
        break;
    }
    num = Math.floor(num / 10);
    romanStack.splice(0,2);
  }
    return res.reverse().join('');
};


expect(intToRoman(1)).toBe('I');
expect(intToRoman(3)).toBe('III');
expect(intToRoman(4)).toBe('IV');
expect(intToRoman(5)).toBe('V');
expect(intToRoman(6)).toBe('VI');
expect(intToRoman(9)).toBe('IX');
expect(intToRoman(1001)).toBe('MI');
expect(intToRoman(58)).toBe('LVIII');
expect(intToRoman(1994)).toBe('MCMXCIV');
expect(intToRoman(3999)).toBe('MMMCMXCIX');