// A twist on the original problem. Instead of counting the number of paths that
// add up to a target sum, return the paths themselves.

const getSumPaths = (tree, targetSum) => {
  const sumsToPaths = {}; // map a sum to array(s) of numbers that add up to sum
  const results = []; // store paths here
  traverse(tree.root, [], 0);
  return results;

  function traverse(node, prevPath, prevSum) {
    if (!node) { return; }

    // add running sum and its values to the hash map
    if (!sumsToPaths.hasOwnProperty[prevSum]) { sumsToPaths[prevSum] = []; }
    sumsToPaths[prevSum] = sumsToPaths[prevSum].concat(node);

    const { value } = node;

    const currPath = prevPath.concat(value);
    const currSum = prevSum + value;
    const diff = currSum - targetSum;

    if (sumsToPaths.hasOwnProperty(diff)) {
      sumsToPaths[diff].forEach(start => {
        const treePath = new Path(start, node);
        results.push(treePath.values);
      });
    }

    // recurse left, recurse right
    traverse(node.left, currPath, currSum);
    traverse(node.right, currPath, currSum);

    // reset the map to its opening state
    // remove current node from the map so non-child nodes cannot use it
    sumsToPaths[prevSum] = sumsToPaths[prevSum].slice(0, -1);
  }
};

module.exports = getSumPaths;

function Path(start, end) {
  this.start = start;
  this.end = end;
}

Object.defineProperty(Path.prototype, 'values', {
  enumerable: true,
  get: function() {
    const { end } = this;
    const build = (node, list) => {
      if (!node) { return false; }
      const { value } = node;
      if (node === end) { return list.concat(value); }

      const lt = build(node.left, list.concat(value));
      const rt = build(node.right, list.concat(value));

      return lt || rt;
    };

    return build(this.start, []);
  }
});
