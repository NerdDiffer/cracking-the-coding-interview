// simple generic implementation of singly-linked list

module.exports = LinkedList;

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function(value) {
  const node = new El(value);

  if (this.head === null) {
    this.head = node;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;
  }
};

function El(value) {
  this.value = value;
  this.next = null;
}
