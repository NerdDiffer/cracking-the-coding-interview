/**
 * Remove Dupes! Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 * Hints: #9, #40
 */

// version with a singly-linked list & a buffer to store values
const rmDuplicates = list => {
  let curr = list.head;
  let prev;
  const values = {}; // set of values

  while (curr !== null) {
    if (!values.hasOwnProperty(curr.data)) {
      values[curr.data] = true;
      prev = curr;
    } else {
      // remove from list
      prev.next = curr.next;
    }

    curr = curr.next;
  }
};

// version with a singly-linked list & no buffer to store values
// time:  O(n^2)
// space: O(1)
const rmDuplicates_noBuffer = list => {
  // traverse list with 2 index references (one ahead of other).
  // will run in quadratic time.
  let curr = list.head;

  while (curr !== null) {
    const { value } = curr;

    let runner = curr.next;
    let prev = curr;

    while (runner !== null) {
      if (runner.value === value) {
        // remove reference to the 'runner'
        prev.next = runner.next;
      } else {
        // do nothing but update reference to prev to set up future removal
        prev = runner;
      }

      runner = runner.next;
    }

    curr = curr.next;
  }
};

module.exports = rmDuplicates_noBuffer;
