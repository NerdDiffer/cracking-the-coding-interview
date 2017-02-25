module.exports = { BinaryTree, El };

function BinaryTree() {
  this.root = null;
}

function El(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
