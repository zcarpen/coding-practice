var invertTree = function(root) {

  function helperRecursion(current) {
      if (!current) return;
      nextRight = current.left;
      current.left = current.right;
      current.right = nextRight;

      helperRecursion(current.left)
      helperRecursion(current.right)
  }

  helperRecursion(root)
  return root;

};