const test = require('ava');
const { BinaryTree, El } = require('../binary-tree.js');
const countSumPaths = require('./count-sum-paths.js');

test('counts paths from root, return early once target sum is met', t => {
  const tree = buildTree();
  const actual = countSumPaths(tree, 8);
  t.is(actual, 3);
});

test('counts paths to sum for overlapping paths, negative values', t => {
  const tree = buildTree();
  const actual = countSumPaths(tree, 8);
  t.is(actual, 6);
});

/**
 * Q: What's up with the naming scheme of child nodes in this tree?
 * A: the number indicates the depth (where tree root is level 0).
 *    the combination of `l` and `r` is path from root.
 *
 * example:
 *   `_2_lr` is 2 levels away from the root.
 *   Its path from the root is: left, right.
 */
function buildTree() {
  const tree = new BinaryTree();
  tree.root = new El(3);

  // 1st level
  const _1_l = new El(-1);
  const _1_r = new El(4);

  // 2nd level
  const _2_ll = new El(3);
  const _2_lr = new El(1);
  const _2_rl = new El(1);
  const _2_rr = new El(2);

  // 3rd level
  const _3_llr = new El(3);
  const _3_lrl = new El(5);
  const _3_lrr = new El(8);
  const _3_rlr = new El(6);
  const _3_rrr = new El(2);

  // 4th level
  const _4_lrrl = new El(-2)
  const _4_rlrr = new El(2)
  const _4_rrrl = new El(5)

  // 5th level
  const _5_lrrlr = new El(2);
  const _5_rlrrl = new El(1);

  /* link parent nodes to children */
  _4_lrrl.right = _5_lrrlr;
  _4_rlrr.left = _5_lrrlr;

  _3_lrr.left = _4_lrrl;
  _3_rlr.right = _4_rlrr;
  _3_rrr.right = _4_rrrl;

  _2_ll.right = _3_llr;
  _2_lr.left = _3_lrl;
  _2_lr.right = _3_lrr;

  _1_l.left = _2_ll;
  _1_l.right = _2_lr;
  _1_r.left = _2_rl;
  _1_r.right = _2_rr;

  tree.root.left = _1_l;
  tree.root.right = _1_r;

  return tree;
}
