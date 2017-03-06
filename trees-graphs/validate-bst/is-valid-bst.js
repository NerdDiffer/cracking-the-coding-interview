/**
 * Implement a function to check if a binary tree is a binary search tree.
 */

// perform an in-order traversal of a tree
const isBST = tree => {
  let lastVal;

  const check = node => {
    if (node !== null) {
      // go left
      const lt = check(node.left);
      if (lt === false) { return false; }

      // check current value
      if (node.value < lastVal) {
        return false;
      } else {
        lastVal = node.value;
      }

      // go right
      const rt = check(node.right);
      if (rt === false) { return false; }
    }

    return true;
  };

  return check(tree.root);
};

module.exports = isBST;
