const test = require('ava');
const rmDuplicates = require('./remove-dups.js');
const LinkedList = require('../linked-list.js');

test('works in simple test case', t => {
  const list = new LinkedList();
  list.append('A');
  list.append('Z');
  list.append('Y');
  list.append('Z');

  rmDuplicates(list);

  const expectedVals = ['A', 'Z', 'Y'];

  let i = 0;
  let curr = list.head;

  while (curr !== null) {
    t.is(curr.value, expectedVals[i])
    curr = curr.next;
    i += 1;
  }
});
