var merge = function(intervals) {
  if (intervals.length === 0) {
      return []
  }
  intervals.sort((a, b) => a[0] - b[0])
  let resultingIntervals = [intervals[0]]
  
  for (let i = 1; i < intervals.length; i++) {
      let curInterval = intervals[i];
      if (typeof curInterval[0] !== 'number' || typeof curInterval[1] !== 'number') {
          continue;
      }
      
      if (resultingIntervals[resultingIntervals.length - 1][1] < curInterval[0]) {
          resultingIntervals.push(curInterval)
      } else {
          let old = resultingIntervals.pop()
          let newMax = curInterval[1] < old[1] ? old[1] : curInterval[1];
          old[1] = newMax;
          resultingIntervals.push(old)
      }
  }
  return resultingIntervals
  
};