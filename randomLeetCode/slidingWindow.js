// const maxSubArraySum = (nums, n) => {
//   // add the first n to get a currentSum
//   let currentSum = 0;
//   for (let i = 0; i < n; i++) {
//     currentSum += nums[i]
//   }
//   let currentMax = currentSum;
//   for (let i = n; i < nums.length; i++) {
//     currentSum = currentSum - nums[i - n] + nums[i];
//     currentMax = Math.max(currentSum, currentMax)
//   }
//   return currentMax

// }

// const minSubArrayLen = (arr, target) => {
//   let start = 0;
//   let end = 0;
//   let curSum = 0;
//   let smallestLength = Infinity;
//   while (end < arr.length) {
//     if (curSum < target) {
//       curSum += arr[end]
//       end++
//     } else if (curSum >= target) {
//       curSum -= arr[start]
//       start++;
//     }
//     if (curSum > target) {
//       smallestLength = Math.min(smallestLength, (end - start))
//     }
//   }

//   return smallestLength;
// }

const findLongestSubstring = (str) => {
  const letters = str.split('')
  // start with two pointers, and initialize them at 0
  let start = 0;
  let end = 0;
  // largestSubstring = 0;
  let longestSubstring = 0;
  // while the latest pointer still hasn't reached the end
  while (end < letters.length) {
    debugger;
    // increment latest pointer and check if there is duplication
    if (letters.slice(start, end).indexOf(letters[end + 1]) === -1) {
      end++
      longestSubstring = Math.max((end + 1 - start), longestSubstring)
    } else {
      while (letters.slice(start, end).indexOf(letters[end + 1]) !== -1) {
        start++
      }
    }
  }
}

console.log(findLongestSubstring('rithmschool'))//7