const isValid = s => {
  const bracketTypes = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (bracketTypes[s[i]]) {
      stack.push(s[i])
    } else {
      if (bracketTypes[stack.pop()] !== s[i]) return false
    }
  }

  return stack.length === 0

};