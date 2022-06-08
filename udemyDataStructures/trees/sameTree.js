var isSameTree = function(p, q) {
  let areSame = true;

  const helper = (node1, node2) => {
      if (!node1 && !node2) return
      if (!node1 || !node2) {
          areSame = false;
          return;
      }
      if (node1.val !== node2.val) {
          areSame = false;
          return;
      }
      helper(node1.left, node2.left);
      helper(node1.right, node2.right);
  }

  helper(p, q)

  return areSame

};