var twoSum = function(array, target) {
  const numsMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (numsMap.has(target - array[i])) {
      return [numsMap.get(target - array[i]), i];
      // get() returns a specified element associated with the specified key from the Map object.
    } else {
      numsMap.set(array[i], i);
      //  set() adds or updates an element with a specified key and value to a Map object.
    }
  }
};
