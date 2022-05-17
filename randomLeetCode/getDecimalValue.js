var getDecimalValue = function (head) {
  //     create array for linked list values
  const linkedListValues = [];
  //     create totalValue
  let totalVal = 0;
  // create counter
  let counter = 0;
  //     iterate over linked list and store values inside array
  let curNode = head;
  while (curNode) {
    linkedListValues.push(curNode.val)
    curNode = curNode.next;
  }

  //     iterate backward over linked list
  for (let i = linkedListValues.length - 1; i >= 0; i--) {
    totalVal += (2 ** counter) * linkedListValues[i]
    counter++
  }

  return totalVal
};