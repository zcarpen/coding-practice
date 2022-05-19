function capitalizeFirst(strings) {
  if (strings.length === 0) {
    return []
  } else {
    return [strings[0][0].toUpperCase() + strings[0].slice(1), ...capitalizeFirst(strings.slice(1))]
  }
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']