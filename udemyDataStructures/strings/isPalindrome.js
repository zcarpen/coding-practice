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

console.log(isPalindrome('A man, a plan, a canal: Panama'));

// This problem first "sanitizes" all of the string by getting rid of all spaces and non-alphanumeric characters using regEx. Then we proceed by assigning pointers to the last character and first character... While looping through the string, if at any point the string at the index is different, this means it isn't a palindrome. However, if you can get to the point where the start pointer exceeds the end pointer without ever having a conflict, this means that the string would be a palindrome.