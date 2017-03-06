const test = require('ava');
const { BinaryTree, El } = require('../binary-tree.js');
const isBST = require('./is-valid-bst.js');

test('#isBST: returns false', t => {
  const tree = new BinaryTree();
  tree.root = new El(8);

  // 1st level
  tree.root.left = new El(4);
  tree.root.right = new El(10);

  // 2nd level
  tree.root.left.left = new El(2);
  tree.root.left.right = new El(6);
  tree.root.right.right = new El(20);

  // 3rd
  tree.root.right.right.left = new El(9);

  const actual = isBST(tree);
  t.false(actual);
});

test('#isBST: returns false for this example', t => {
  const tree = new BinaryTree();
  tree.root = new El(20);

  // 1st level
  tree.root.left = new El(10);
  tree.root.right = new El(30);

  // 2nd level
  tree.root.left.right = new El(25);

  const actual = isBST(tree);
  t.false(actual);
});

test('#isBST: returns true for this example', t => {
  const tree = new BinaryTree();
  tree.root = new El(20);

  // 1st level
  tree.root.left = new El(10);
  tree.root.right = new El(30);

  // 2nd level
  tree.root.left.left = new El(5);
  tree.root.left.right = new El(15);

  // 3rd level
  tree.root.left.left.left = new El(3);
  tree.root.left.left.right = new El(7);
  tree.root.left.right.right = new El(17);

  const actual = isBST(tree);
  t.true(actual);
});
