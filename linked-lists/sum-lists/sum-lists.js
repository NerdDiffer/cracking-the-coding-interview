// hints: 7, 30, 71, 95, 109

// recursively add each value from linked list to an array (tail -> head order)
const buildNumberArr = (node, numbers = []) => {
  if (node.value !== null) {
    if (node.next !== null) {
      buildNumberArr(node.next, numbers);
    }

    numbers.push(node.value);
  }

  return numbers;
};

const original_sumLists = (a, b) => {
  // convert list to string, then convert string to integer
  const numerify = arr => parseInt(arr.join(''));

  return numerify(buildNumberArr(a)) + numerify(buildNumberArr(b));
};

const iteratively_sumLists = (list1, list2) => {
  // build two arrays
  const numbers1 = buildNumberArr(list1.head);
  const numbers2 = buildNumberArr(list2.head);

  let sum = 0;
  let a = numbers1.length - 1;
  let b = numbers2.length - 1;

  let factor = 1;

  while (a >= 0 || b >= 0) {
    const numA = numbers1[a] || 0; // set fallback value in case index < 0
    const numB = numbers2[b] || 0;
    const tmp = numA + numB;
    sum += (tmp * factor)

    // set up next iteration
    factor *= 10;
    a -= 1;
    b -= 1;
  }

  return sum;
};

module.exports = iteratively_sumLists;
