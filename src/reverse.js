function reverse(arg) {
  let strToReverse = String(arg);
  let str = '';

  if (arg === undefined || arg === null) {
    return str;
  }

  let n = strToReverse.length - 1;

  while (n >= 0) {
    str = str + strToReverse[n];
    n = n - 1;
  }

  return str;
}

module.exports = reverse;
