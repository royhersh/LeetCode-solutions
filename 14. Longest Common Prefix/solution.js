var longestCommonPrefix = function(strs) {
    let result = '';
    if (strs.length === 0) return result;

    const charsAtGivenLocation = (loc, arr) => {
        return arr.map(word => word[loc]);
    }
    
    const firstWord = strs[0];
    for (let i = 0; i < firstWord.length; i++) {
        const charsAtIndex = charsAtGivenLocation(i, strs);
        const commonCharAtPlace = charsAtIndex.every(elem => elem === charsAtIndex[0]) ? charsAtIndex[0] : '';
        if (commonCharAtPlace === '') return result;
       
        result += commonCharAtPlace;
    }

    return result;

};

console.log(longestCommonPrefix(["flooe","florish"]));
