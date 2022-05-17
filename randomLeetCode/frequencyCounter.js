// const same = function (arr1, arr2) {
//   const freq1 = {}
//   const freq2 = {}
//   arr1.forEach(num => {
//     freq1[num ** 2] = freq1[num ** 2] === undefined ? 1 : freq1[num ** 2] + 1
//   })
//   arr2.forEach(num => {
//     freq2[num] = freq2[num] === undefined ? 1 : freq2[num] + 1
//   })

//   if (JSON.stringify(freq1) === JSON.stringify(freq2)) {
//     return true
//   }
//   return false
// }

function areAnagrams(str1, str2) {
  const freq1 = {}
  const freq2 = {}
  str1.split('').forEach(letter => {
    freq1[letter] = freq1[letter] === undefined ? 1 : freq1[letter] + 1
  })
  str2.split('').forEach(letter => {
    freq2[letter] = freq2[letter] === undefined ? 1 : freq2[letter] + 1
  })

  if (JSON.stringify(freq1) === JSON.stringify(freq2)) return true;
  return false
}

console.log(areAnagrams('', 'b'))
