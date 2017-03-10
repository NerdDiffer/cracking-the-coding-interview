/**
 * Given an ascendingly-sorted array of unique integers, write an algorithm to
 * create a binary search tree with minimal height.
 */
const { BinaryTree, El } = require('../binary-tree.js');

const insertValAtNode = (arr, lo, hi) => {
  // if mid point not available, then return immediately
  if (lo > hi) { return null; }

  // get index of median value between two sides.
  const mid = lo + Math.floor((hi - lo) / 2);

  // insert median into tree
  const node = new El(arr[mid]);
  // go left, set hi adjacent to median & recurse
  node.left = insertValAtNode(arr, lo, mid - 1);
  // go right, set lo adjacent to median & recurse
  node.right = insertValAtNode(arr, mid + 1, hi);
  return node;
};

const minimizeHeight = arr => {
  const tree = new BinaryTree();

  // track lower & higher index of array
  const lo = 0;
  const hi = arr.length - 1;

  tree.root = insertValAtNode(arr, lo, hi);

  return tree;
};

module.exports = { minimizeHeight };
