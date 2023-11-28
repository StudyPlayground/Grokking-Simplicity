function accumulate(arr) {
  const copyArr = arr.slice();
  let accumulator = 0;

  for (let i = 0; i < copyArr.length; i++) {
    accumulator += copyArr[i];
  }

  return accumulator;
}

exports.accumulate = accumulate;
