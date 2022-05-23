var majorityElement = function (nums) {
  let counts = {}
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i]
    counts[curNum] = counts[curNum] === undefined ? 1 : counts[curNum] + 1;
    if (counts[curNum] >= Math.ceil(nums.length / 2)) {
      return curNum;
    }
  }
};