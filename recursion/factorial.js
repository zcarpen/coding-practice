// The idea behind a factorial is that you should take all the numbers from 0 to n, and multiply them together. Recursion helps us with this because we can start with n, and multiply that with n - 1 (n * (n - 1)), and continue this pattern until n === 0. Once n === 0, we can return our base case of 1, because 0! === 1.

// const factorial = (n) => {
//   if (n === 0) {
//     return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }

// console.log(factorial(5));

const factorial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return factorial(n - 1) * n
  }
}
