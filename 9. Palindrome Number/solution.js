/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (
        x < 0 ||
        x === '' ||
        isNaN(x)
    ) return false;

    if (x < 10) return true;

    let num = Number(x)
    let reversed = 0;
    
    while (num !== 0) {
        const remainder = num % 10;
        num = Math.floor(num / 10);
        reversed = reversed * 10 + remainder;
    }

    return reversed == String(x);

};

console.log(isPalindrome('1211331121'))