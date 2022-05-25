function groupAnagrams(strs) {
  let groups = {}

  strs.forEach(str => {
    let orderedStr = str.split('').sort().join('');
    if (!groups[orderedStr]) {
      groups[orderedStr] = [str];
    } else {
      groups[orderedStr].push(str)
    }
  })

  return Object.values(groups)
}