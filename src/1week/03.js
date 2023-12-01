const { accumulate } = require('./02.js');

const  arraySlice= (arr,startIdx=0, EndIdx) => arr.slice(startIdx, EndIdx)
const multiArrMapAndFlatten = (multiArr, mapper) => multiArr.map(mapper).flat()

function multiDimensionalAccumulate(multiDimensionalArr) {
  return accumulate(multiArrMapAndFlatten(multiDimensionalArr,arraySlice))
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
