const stringSearch = (str, sub) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[0]) {
      for (let j = 1; j < sub.length; j++) {
        if (str[i + j] === sub[j]) {
          if (sub.length - 1 === j) {
            i += j
            count++
          }
          continue;
        } else {
          i += j
          break;
        }
      }
    }
  }
  return count;
}

console.log(stringSearch('womwmeowomgodisomgsaomg', 'omg'))