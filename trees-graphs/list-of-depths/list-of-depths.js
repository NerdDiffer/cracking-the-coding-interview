/**
 * List of Depths: Given a binary tree, design an algorithm which creates a
 * linked list of all the nodes at each depth (e.g., if you have a tree with
 * depth D, you'll have D linked lists).
 *
 * Hints: #107, #123, #135
 */
const LinkedList = require('../../linked-lists/linked-list.js');

const getLimit = depth => Math.pow(2, depth + 1) - 1;

const makeListsAtDepths = tree => {
  let n = 0; // track current depth (0-indexed)
  let i = 1; // track current node (1-indexed)
  let limit = getLimit(n);
  const queue = [tree.root]; // traverse tree in a BFS-like fashion
  const lists = []; // store all linked lists here
  let list = new LinkedList();

  while (queue.length > 0) {
    const curr = queue.shift();

    if (i > limit) {
      // go to next level
      n += 1;
      limit = getLimit(n);
      lists.push(list);
      list = new LinkedList();
    }

    list.append(curr.value);

    if (curr.left) { queue.push(curr.left); }
    if (curr.right) { queue.push(curr.right); }

    i += 1;
  }

  lists.push(list);

  return lists;
};

module.exports = makeListsAtDepths;
