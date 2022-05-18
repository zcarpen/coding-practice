// const sumZero = (arr) => {
//   let pointer1 = 0;
//   let pointer2 = arr.length - 1;
//   while (pointer1 !== pointer2) {
//     if (arr[pointer1] + arr[pointer2] === 0) return [arr[pointer1], arr[pointer2]]
//     if (arr[pointer1] + arr[pointer2] < 0) {
//       pointer1++
//     } else {
//       pointer2--
//     }
//   }
//   return undefined
// }

// const areThereDuplicates = (...args) => {
//   if (args.length <= 1) return true;
//   args.sort();
//   let start = 0
//   let next = 1
//   while (next < args.length) {
//     if (args[start] === args[next]) return true
//     start++
//     next++
//   }
//   return false;
// }

// const avgPair = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1
//   while (start < end) {
//     let smaller = arr[start]
//     let larger = arr[end]
//     if ((smaller + larger) / 2 === target) {
//       return true;
//     } else if ((smaller + larger) / 2 < target) {
//       start++
//     } else {
//       end--
//     }
//   }
//   return false
// }

const isSubsequence = (sub, sequence) => {
  let i = 0;
  let j = 0;
  while (j < sequence.length) {
    if (sub[i] === sequence[j]) i++;
    if (i === sub.length) return true;
    j++;
  }
  return false
}

console.log(isSubsequence('abc', 'abraadabra'))