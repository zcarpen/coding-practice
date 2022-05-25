function lengthOfLongestSubstring(s) {
  let length = 0;
  let start = 0;
  let indexes = {
  }
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i]
    if (indexes[curLetter] >= start) {
      start = indexes[curLetter] + 1;
    }
    indexes[curLetter] = i;
    length = Math.max(length, i - start + 1)
  }
  return length
}