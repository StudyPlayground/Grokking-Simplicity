const sum = (a, b) => a + b;

function accumulate(arr) {
  return arr.reduce(sum, 0);
}

exports.accumulate = accumulate;
