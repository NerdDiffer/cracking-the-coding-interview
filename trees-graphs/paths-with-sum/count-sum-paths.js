/**
 * Paths with Sum: You are given a binary tree in which each node contains an
 * integer value (which might be positive or negative). Design an algorithm to
 * count the number of paths that sum to a given value. The path does not need
 * to start or end at the root or a leaf, but it must go downwards (traveling
 * only from parent nodes to child nodes)
 */

const countSumPaths = (tree, targetSum) => {
  let count = 0;

  // depth first search. pre-order: (current, left, right)
  const getSum = (node, total) => {
    if (node === null) {
      return;
    } else if (total === targetSum) {
      count += 1;
      return;
    }

    const sum = total + node.value;
    getSum(node.left, sum);
    getSum(node.right, sum);
  };

  getSum(tree.root, 0);

  return count;
};

module.exports = countSumPaths;
