/**
 * Paths with Sum: You are given a binary tree in which each node contains an
 * integer value (which might be positive or negative). Design an algorithm to
 * count the number of paths that sum to a given value. The path does not need
 * to start or end at the root or a leaf, but it must go downwards (traveling
 * only from parent nodes to child nodes)
 */

const countSumPaths = (tree, targetSum) => {
  const sumsToCounts = {};
  return traverse(tree.root, 0);

  function traverse(node, prevSum) {
    if (!node) { return 0; }

    const currSum = prevSum + node.value;
    const diff = currSum - targetSum;

    let total = sumsToCounts.hasOwnProperty(diff) ? sumsToCounts[diff] : 0;
    if (currSum === targetSum) { total += 1; }

    incMap(sumsToCounts, currSum);

    total += traverse(node.left, currSum);
    total += traverse(node.right, currSum);

    decMap(sumsToCounts, currSum);

    return total;
  }

  function incMap(map, key) {
    if (!map.hasOwnProperty(key)) { map[key] = 0; }
    map[key] += 1;
  }

  function decMap(map, key) {
    map[key] -= 1;
  }
};

module.exports = countSumPaths;
