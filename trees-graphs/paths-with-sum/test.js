const test = require('ava');
const { BinaryTree, El } = require('../binary-tree.js');
const { sumPath, countSumPaths }  = require('./count-sum-paths.js');

test('sumPath: returns count of contiguous sub arrays whose sum equals a targetSum', t => {
  const nodeValues = [3,4,2,2,5];
  let actual = 0;
  sumPath(nodeValues, 8, () => actual++);
  t.is(actual, 1);
});

test('counts paths to sum for overlapping paths, negative values', t => {
  const tree = buildTree();
  const actual = countSumPaths(tree, 8);
  t.is(actual, 9);
});

function buildTree() {
  const tree = new BinaryTree();
  tree.root = new El(3);
  // 1st level
  tree.root.left = new El(-1);
  tree.root.right = new El(4);

  // 2nd level
  tree.root.left.left = new El(3);
  tree.root.left.right = new El(1);
  tree.root.right.left = new El(1);
  tree.root.right.right = new El(2);

  // 3rd level
  tree.root.left.left.right = new El(3);
  tree.root.left.right.left = new El(5);
  tree.root.left.right.right = new El(8);
  tree.root.right.left.right = new El(6);
  tree.root.right.right.right = new El(2);

  // 4th level
  tree.root.left.right.right.left = new El(-2);
  tree.root.right.left.right.right = new El(2);
  tree.root.right.right.right.left = new El(5);

  // 5th level
  tree.root.left.right.right.left.right = new El(2);
  tree.root.right.left.right.right.left = new El(1);

  return tree;
}
