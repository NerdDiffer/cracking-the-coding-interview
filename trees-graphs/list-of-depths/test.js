const test = require('ava');
const makeListsAtDepths = require('./list-of-depths.js');
const { BinaryTree, El } = require('../binary-tree.js');
const LinkedList = require('../../linked-lists/linked-list.js');

test('works on this small sample tree', t => {
  // tree not a BST, so nodes are not necessarily 'sorted'
  const tree = new BinaryTree();
  // 1st level
  tree.root = new El('B');
  // 2nd level
  tree.root.left = new El('D');
  tree.root.right = new El('Z');
  // 3rd level
  tree.root.left.left = new El('M');
  tree.root.left.right = new El('J');
  tree.root.right.left = new El('P');


  // list for 1st level
  const exp_list1 = new LinkedList();
  exp_list1.append('B');

  // list for 2nd level
  const exp_list2 = new LinkedList();
  exp_list2.append('D');
  exp_list2.append('Z');

  // list for 3rd level
  const exp_list3 = new LinkedList();
  exp_list3.append('M');
  exp_list3.append('J');
  exp_list3.append('P');

  const actual = makeListsAtDepths(tree);
  const expected = [exp_list1, exp_list2, exp_list3];
  t.deepEqual(actual, expected);
});
