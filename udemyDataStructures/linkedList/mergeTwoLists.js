var mergeTwoLists = function(list1, list2) {
  let dummyHead = {next: null}
  let tail = dummyHead
  while (list1 && list2) {
      if (list1.val > list2.val) {
          tail.next = list2;
          list2 = list2.next;
      } else {
          tail.next = list1;
          list1 = list1.next;
      }
      tail = tail.next;
  }
  if (!list1) {
      tail.next = list2
  } else {
      tail.next = list1
  }

  return dummyHead.next;

};