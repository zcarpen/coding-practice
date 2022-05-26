var removeNthFromEnd = function(head, n) {
  let start = head;
  let nthFromEnd = head;
  let fast = head;

  for (let i = 1; i <= n; i++) {
      fast = fast.next;
  }

  while (fast.next) {
      fast = fast.next;
      nthFromEnd = nthFromEnd.next;
  }

  nthFromEnd.next = nthFromEnd.next.next;
  return start;
};