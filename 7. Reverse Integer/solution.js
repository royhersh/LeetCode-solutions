/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let reversed = 0;
    const shouldMinus = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    while (x !== 0) {
        
        const pop = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + pop;
    }
    if (reversed > 0x7FFFFFFF) {
        return 0;
    }
    return reversed * shouldMinus;
    
};