// using recursion to create a fibonacci sequence up to a given number is the matter of repeating the concept of "the previous 2 numbers added together equal the next number" (n-2) + (n-1) = n

// to create a sequence of fib numbers up to a given index
// create array to hold numbers
//

const createFibSeq = (num) => {
  const fib = [0];
  if (num === 0) return fib;
  const inner = (n) => {
    if (n === 1) {
      fib.push(1)
    } else {
      inner(n - 1)
      fib.push(fib[n - 1] + fib[n - 2])
    }
  }
  inner(num)
  return fib;
}

console.log(createFibSeq(7))