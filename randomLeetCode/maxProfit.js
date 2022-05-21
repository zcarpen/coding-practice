// I - array of prices
// output - number representing max profit
// C - must buy before selling
// E - if the day you buy, there are no bigger days to sell on

var maxProfit = function (prices) {
  let maxProfit = 0;
  let smallest = Infinity;
  for (let i = 0; i < prices.length; i++) {
    let curPrice = prices[i];
    if (smallest > curPrice) {
      smallest = curPrice
    }
    if ((curPrice - smallest) > maxProfit) {
      maxProfit = (curPrice - smallest)
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))