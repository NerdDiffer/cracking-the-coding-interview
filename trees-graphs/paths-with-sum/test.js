const test = require('ava');
const { BinaryTree, El } = require('../binary-tree.js');
const countSumPaths = require('./count-sum-paths.js');
const getSumPaths = require('./get-sum-paths');

test('#countSumPaths', t => {
  const tree = buildTreeFromBook()
  const actual = countSumPaths(tree, 8);
  t.is(actual, 3);
});

test('#getSumPaths', t => {
  const tree = buildTreeFromBook();
  const actual = getSumPaths(tree, 8);
  const expected = [[5, 3], [5, 1, 2], [-3, 11]];
  t.deepEqual(actual, expected);
});

test('#countSumPaths', t => {
  const tree = buildTree();
  const actual = countSumPaths(tree, 5);
  t.is(actual, 5);
});

test('#getSumPaths', t => {
  const tree = buildTree();
  const actual = getSumPaths(tree, 5);
  const expected = [[5], [2, 3], [3, 2], [5], [1, 2, 1, 1]];
  t.deepEqual(actual, expected);
});

function buildTree() {
  const tree = new BinaryTree();
  tree.root = new El(1);
  const { root } = tree;

  // 1st level
  root.left = new El(5);
  root.right = new El(2);

  // 2nd level
  root.right.left = new El(3);
  root.right.right = new El(1);

  // 3rd level
  root.right.left.left = new El(2);
  root.right.left.right = new El(7);
  root.right.right.left = new El(5);
  root.right.right.right = new El(1);

  return tree;
}

// same as example tree from back of the book's solution walkthrough
function buildTreeFromBook() {
  const tree = new BinaryTree();
  tree.root = new El(10);
  const { root } = tree;

  // 1st level
  root.left = new El(5);
  root.right = new El(-3);

  // 2nd level
  root.left.left = new El(3);
  root.left.right = new El(1);
  root.right.right = new El(11);

  // 3rd level
  root.left.left.left = new El(3);
  root.left.left.right = new El(-2);
  root.left.right.right = new El(2);

  return tree;
}
