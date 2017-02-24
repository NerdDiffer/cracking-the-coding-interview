// simple generic implementation of singly-linked list

module.exports = LinkedList;

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.append = function(value) {
  const node = new El(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

function El(value) {
  this.value = value;
  this.next = null;
}
