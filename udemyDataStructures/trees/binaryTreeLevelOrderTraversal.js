var levelOrder = function(root) {

  const result = [];

  const helper = (node, depth) => {
      if (!node) {
          return
      }

      if (!result[depth]) {
          result[depth] = []
      }

      result[depth].push(node.val);
      helper(node.left, depth + 1);
      helper(node.right, depth + 1);
  }
  helper(root, 0)

  return result

};