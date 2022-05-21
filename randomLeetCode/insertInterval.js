// I - an array of non-overlapping intervals, and an interval (that may overlap)
// O - an array of non-overlapping intervals with the interval added
// C - None
// E - what if given interval doesn't overlap, What if given inverval overlaps multiple?

// [[1,2],[3,5],[6,7],[8,10],[12,16]]
// [4, 8]

// first, find the first interval index that surrounds the starting value
// find interval index that surrounds ending value
// combine into new interval starting value of first and ending value of last
// return interval.sliced to start and slice from end with new interval

var insert = function (intervals, newInterval) {
  let start = null;
  let end = null;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {
      start = i
    }
    if (intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1]) {
      end = i
      break;
    }
  }
  let finalMergedInterval = [start === null ? newInterval[0] : intervals[start][0], end === null ? newInterval[1] : intervals[end][1]];

  if (intervals.length === 0) {
    return [newInterval]
  }

  return [...intervals.slice(0, start), finalMergedInterval, ...intervals.slice(end + 1)]
};

// (not fully working, but close)
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
console.log(insert([[1, 3], [6, 9]], [2, 5]))