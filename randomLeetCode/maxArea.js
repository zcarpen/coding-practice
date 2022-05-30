var maxArea = function(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
      if (height[start] <= height[end]) {
          let newArea = (end - start) * height[start]
          console.log(newArea)
          maxArea = Math.max(maxArea, newArea)
          start++
      } else {
          let newArea = (end - start) * height[end]
          console.log(newArea)
          maxArea = Math.max(maxArea, newArea)
          end--
      }
  }
  return maxArea;
};