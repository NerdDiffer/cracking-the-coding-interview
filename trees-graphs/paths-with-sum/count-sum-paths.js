/**
 * Paths with Sum: You are given a binary tree in which each node contains an
 * integer value (which might be positive or negative). Design an algorithm to
 * count the number of paths that sum to a given value. The path does not need
 * to start or end at the root or a leaf, but it must go downwards (traveling
 * only from parent nodes to child nodes)
 */

const countSumPaths = (tree, targetSum) => {
  const sumsToCounts = {};
  return traverse(tree.root, 0)

  function traverse(node, prevSum) {
    if (!node) { return 0; }

    const currSum = prevSum + node.value;
    const diff = currSum - targetSum;

    let total = sumsToCounts.hasOwnProperty(diff) ? sumsToCounts[diff] : 0;
    if (currSum === targetSum) { total += 1; }

    // add to map
    if (!sumsToCounts.hasOwnProperty(currSum)) { sumsToCounts[currSum] = 0; }
    sumsToCounts[currSum] += 1;

    total += traverse(node.left, currSum);
    total += traverse(node.right, currSum);

    // remove from map
    sumsToCounts[currSum] -= 1;

    return total;
  }
};

module.exports = countSumPaths;
