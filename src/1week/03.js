function multiDimensionalArrayCondition ({row, column}) {
  return column < row;
}

function multiDimensionalAccumulate(multiDimensionalArray) {
  let accumulator = 0;

  for (let i = 0; i < multiDimensionalArray.length; i++) {
    for (let j = 0; j < multiDimensionalArray[i].length; j++) {
      if (multiDimensionalArrayCondition({row: i, column: j})) {
        accumulator += multiDimensionalArray[i][j];
      }
    }
  }

  return accumulator;
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
