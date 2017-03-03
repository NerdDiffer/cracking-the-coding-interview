/**
 * Write a function to determine if a binary tree is balanced.
 * A balanced tree should be a tree such that the heights of the 2 subtrees of
 * any node never differ by more than one.
 */

const getHeight = node => {
  if (!node.left && !node.right) { // are you at a leaf node?
    return 0;
  } else if (node.left && !node.right) { // left child only
    return 1 + getHeight(node.left);
  } else if (!node.left && node.right) { // right child only
    return 1 + getHeight(node.right);
  } else {
    const lt = getHeight(node.left);
    const rt = getHeight(node.right);
    return 1 + Math.max(lt, rt);
  }
};

// get heights of left & right subtrees. compare difference
const isBalanced = tree => {
  const { root } = tree;
  if (root === null) { return true; }

  const lt = getHeight(root.left)
  const rt = getHeight(root.right)

  return Math.abs(lt - rt) <= 1;
};

module.exports = { getHeight, isBalanced };
