var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let currentMainNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (currentMainNum + nums[j] === target) {
        return [i, j]
      }
    }
  }
};