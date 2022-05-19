const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

const collectStrings = (obj) => {
  let strings = []
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      strings.push(...collectStrings(obj[key]))
    } else {
      if (typeof obj[key] === 'string') {
        strings.push(obj[key])
      }
    }
  }
  return strings
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])