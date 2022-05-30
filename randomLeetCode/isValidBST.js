var isValidBST = function(root) {
  let isValid = true;

  function innerRecursive(node, min, max) {
      if (!node) return
      if (node.val <= min || node.val >= max) {
          isValid = false;
          return;
      }

      innerRecursive(node.left, min, node.val);
      innerRecursive(node.right, node.val, max)

  }

  innerRecursive(root, -Infinity, Infinity)

  return isValid;

};