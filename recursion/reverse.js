function reverse(string) {
  if (string.length === 0) {
    return ''
  } else {
    console.log(string, string[string.length - 1])
    return reverse(string.slice(1)) + string[0]
  }
}

console.log(reverse('awesome'))