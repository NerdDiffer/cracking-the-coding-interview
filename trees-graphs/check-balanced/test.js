const test = require('ava');
const { getHeight, isBalanced } = require('./is-balanced.js');
const { BinaryTree, El } = require('../binary-tree.js');

test('#isBalanced: returns true', t => {
  // tree is balanced, but not full

  const tree = new BinaryTree();
  // 1st level
  tree.root = new El('root');
  // 2nd level
  tree.root.left = new El('root.left');
  tree.root.right = new El('root.right');
  // 3rd level
  tree.root.left.left = new El('root.left.left');
  tree.root.right.left = new El('root.right.left');

  const actual = isBalanced(tree);
  t.true(actual);

  // check heights
  t.is(getHeight(tree.root.left.left), 0);
  t.is(getHeight(tree.root.right.left), 0);
  t.is(getHeight(tree.root.left), 1);
  t.is(getHeight(tree.root.right), 1);
  t.is(getHeight(tree.root), 2);
});

test('#isBalanced: returns false', t => {
  const tree = new BinaryTree();
  // 1st level
  tree.root = new El('root');
  // 2nd level
  tree.root.left = new El('root.left');
  tree.root.right = new El('root.right');
  // 3rd level
  tree.root.right.left = new El('root.right.left');
  tree.root.right.right = new El('root.right.right');
  // 4th level
  tree.root.right.left.left = new El('root.right.left.left');
  tree.root.right.left.right = new El('root.right.left.right');

  const actual = isBalanced(tree);
  t.false(actual);

  // check heights
  t.is(getHeight(tree.root.right.left.left), 0);
  t.is(getHeight(tree.root.right.left.right), 0);
  t.is(getHeight(tree.root.right.left), 1);
  t.is(getHeight(tree.root.right.right), 0);
  t.is(getHeight(tree.root), 3);
  t.is(getHeight(tree.root.left), 0);
  t.is(getHeight(tree.root.right), 2);
});
