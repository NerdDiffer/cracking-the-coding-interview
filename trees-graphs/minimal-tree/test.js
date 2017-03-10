const test = require('ava');
const { BinaryTree, El } = require('../binary-tree.js');
const { minimizeHeight } = require('./minimize-height.js');

test('#minimizeHeight: works with simple tree with consecutive values', t => {
  const tree = new BinaryTree();
  tree.root = new El(8);

  // 1st level
  tree.root.left = new El(4);
  tree.root.right = new El(12);

  // 2nd level
  tree.root.left.left = new El(2);
  tree.root.left.right = new El(6);
  tree.root.right.left = new El(10);
  tree.root.right.right = new El(14);

  // 3rd level
  tree.root.left.left.left = new El(1);
  tree.root.left.left.right = new El(3);
  tree.root.left.right.left = new El(5);
  tree.root.left.right.right = new El(7);
  tree.root.right.left.left = new El(9);
  tree.root.right.left.right = new El(11);
  tree.root.right.right.left = new El(13);
  tree.root.right.right.right = new El(15);

  const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const actual = minimizeHeight(input);
  const expected = tree;
  t.deepEqual(actual, expected);
});

test('#minimizeHeight: works w/ array of unevenly distributed values & even length', t => {
  // - the array's median value (root of tree) is not the array's mean value
  // - cannot be a 'perfect binary tree' because of node count & tree depth

  const tree = new BinaryTree();
  tree.root = new El(10);

  // 1st level
  tree.root.left = new El(4);
  tree.root.right = new El(17);

  // 2nd level
  tree.root.left.right = new El(6);
  tree.root.right.left = new El(14);
  tree.root.right.right = new El(100);

  const input = [4,6,10,14,17,100];
  const actual = minimizeHeight(input);
  const expected = tree;
  t.deepEqual(actual, expected);
});
