function longestPalindrome(s) {
  let longest = 1;
  let startIndex = 0;

  function expandAroundTheMiddle(left, right) {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right - left + 1 > longest) {
        startIndex = left;
        longest = right - left + 1
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundTheMiddle(i - 1, i + 1);
    expandAroundTheMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + longest)
}

console.log(longestPalindrome('abacdfgdcaba'))