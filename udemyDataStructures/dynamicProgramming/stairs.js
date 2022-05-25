var climbStairs = function(n) {
  let prevPrev = 2;
  let prev = 3;

  if (n <= 3) {
      return n
  } else {
      for (i = 4; i <= n; i++) {
          let lastPrevPrev = prevPrev;
          prevPrev = prev;
          prev = lastPrevPrev + prev
      }
  }
  return prev
};