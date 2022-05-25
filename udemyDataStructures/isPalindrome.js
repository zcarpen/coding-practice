function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '')
  console.log(s)
  let end = s.length - 1;
  let front = 0;
  while (front < end) {
    if (s[front] !== s[end]) {
      return false
    }

    front++;
    end--;
  }
  return true;
}

export default isPalindrome;