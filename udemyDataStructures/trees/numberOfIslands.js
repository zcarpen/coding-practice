// const dfs = (grid, row, col) => {
//   if (row <= 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") {
//     return
//   }
//   grid[row][col] = "0";
//   dfs(grid, row - 1, col)
//   dfs(grid, row + 1, col)
//   dfs(grid, row, col - 1)
//   dfs(grid, row, col + 1)

// }

function numIslands(grid) {
  // iterate through every entry in both rows and columns
  let islandCounter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandCounter++
        debugger;
        dfs(grid, row, col)
      }
    }
  }

  function dfs(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") {
      return
    }
    grid[row][col] = "0";
    dfs(grid, row - 1, col)
    dfs(grid, row + 1, col)
    dfs(grid, row, col - 1)
    dfs(grid, row, col + 1)
  }

  return islandCounter;
}

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]))