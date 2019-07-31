const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // map nums into key/value hashmap - key is the element and the value is the index.
    let hashMap = {};
    nums.map((el, index) => hashMap[el] = index);
    
    // reduce each element in nums from target and check if result exist in hashmap.
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        const remain = target - nums[i];
        if (hashMap[remain] && hashMap[remain] !== i) {
            return [i, hashMap[remain]];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));