/**
 * Paths with Sum: You are given a binary tree in which each node contains an
 * integer value (which might be positive or negative). Design an algorithm to
 * count the number of paths that sum to a given value. The path does not need
 * to start or end at the root or a leaf, but it must go downwards (traveling
 * only from parent nodes to child nodes)
 */

const sumPath = (nodeValues, targetSum, cb) => {
  const len = nodeValues.length;

  for (let end = len - 1; end >= 0; end -= 1) {
    for (let start = end; start >= 0; start -= 1) {
      const slice = nodeValues.slice(start, end + 1);
      const sum = slice.reduce((s, v) => s + v, 0);
      if (sum === targetSum) { cb(); }
    }
  }
};

const countSumPaths = (tree, targetSum) => {
  let count = 0;
  const incrementCount = () => count += 1;

  // use DFS to explore paths from root to every leaf node
  const traverse = (node, path, count) => {
    if (!node.left && !node.right) {
      sumPath(path.concat(node.value), targetSum, incrementCount);
      return;
    }

    if (node.left) { traverse(node.left, path.concat(node.value), count); }
    if (node.right) { traverse(node.right, path.concat(node.value), count); }
  };

  traverse(tree.root, [], count);
  return count;
};

module.exports = { sumPath, countSumPaths };
