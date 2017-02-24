const test = require('ava');
const LinkedList = require('./linked-list.js');

test('#append: sets tail & head properties on empty list', t => {
  const list = new LinkedList();
  const value = 4;
  list.append(value);

  // head
  t.is(list.head.value, value);

  // tail
  t.is(list.tail.value, value);
  t.is(list.tail.next, null);
});

test('#append: updates tail property for a non-empty list', t => {
  const list = new LinkedList();
  const values = [1,2,3,4];

  // check tail value after each #append
  values.forEach(v => {
    list.append(v);
    t.is(list.tail.value, v);
  });

  // the head remains the same
  t.is(list.head.value, values[0]);
});

test('#append: links one node to another', t => {
  const list = new LinkedList();
  const values = [1,2,3,4];
  values.forEach(v => list.append(v));

  let curr = list.head;
  const lastInd = values.length - 1;

  for (let i = 0; i < lastInd; i += 1) {
    t.is(curr.value, values[i]);
    t.is(curr.next.value, values[i + 1]);
    curr = curr.next;
  }

  t.is(curr.value, values[lastInd]);
  t.is(curr.next, null);
});
