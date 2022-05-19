const sumRange = (num1, num2) => {
  if (num2 === num1) {
    return num1
  } else {
    return num2 + sumRange(num1, num2 - 1)
  }
}
