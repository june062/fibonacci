function fibIteration(num) {
  let arr = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < num; i++) {
    let c = a;
    arr.push(c);
    c = a + b;
    a = b;
    b = c;
  }
  return arr;
}
function fibRecursive(num, arr = []) {
  if (num == 2) {
    arr[num - 1] = 1;
    return [1];
  } else if (num == 1) {
    arr[num - 1] = 0;
    return [0];
  } else {
    arr[num - 1] =
      fibRecursive(num - 2, arr)[0] + fibRecursive(num - 1, arr)[0];
    return [arr[num - 1], arr];
  }
}

console.log(fibRecursive(8)[1]);
