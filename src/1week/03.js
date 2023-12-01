const { accumulate } = require('./02.js');

const  gatherUptoIdx= (arr,idx) => arr.slice(0, idx)
const mapAndFlatten = (arr, mapper) => arr.map(mapper).flat()

function multiDimensionalAccumulate(multiDimensionalArr) {
  return accumulate(mapAndFlatten(multiDimensionalArr,gatherUptoIdx))
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
