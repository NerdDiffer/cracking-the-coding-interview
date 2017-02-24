const test = require('ava');
const sumLists = require('./sum-lists.js');
const LinkedList = require('../linked-list.js');

test('sample code works', t => {
  const list1 = new LinkedList();
  list1.append(7);
  list1.append(1);
  list1.append(6);

  const list2 = new LinkedList();
  list2.append(5);
  list2.append(9);
  list2.append(2);

  const actual = sumLists(list1, list2);
  t.is(actual, 912);
});

test('works on input from hint #30', t => {
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(5);
  list1.append(9);

  const list2 = new LinkedList();
  list2.append(2);
  list2.append(3);
  list2.append(6);
  list2.append(7);

  const actual = sumLists(list1, list2);
  t.is(actual, 8583);
});

test('works on input from hint #95', t => {
  const list1 = new LinkedList();
  list1.append(9);
  list1.append(7);
  list1.append(8);

  const list2 = new LinkedList();
  list2.append(6);
  list2.append(8);
  list2.append(5);

  const actual = sumLists(list1, list2);
  t.is(actual, 1465);
});

test('works for lists of different lengths', t => {
  const list1 = new LinkedList();
  list1.append(7);
  list1.append(1);

  const list2 = new LinkedList();
  list2.append(5);
  list2.append(9);
  list2.append(2);
  list2.append(4);

  const actual = sumLists(list1, list2);
  t.is(actual, 4312);
});

test('works for lists of different lengths when order is switched', t => {
  const list1 = new LinkedList();
  list1.append(5);
  list1.append(9);
  list1.append(2);
  list1.append(4);

  const list2 = new LinkedList();
  list2.append(7);
  list2.append(1);

  const sum1 = sumLists(list1, list2);
  t.is(sum1, 4312);
});
