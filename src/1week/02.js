const sum = (a,b) => a+b 

function accumulate(arr,combiner = sum, initialVal = 0) {
 
  return arr.reduce(combiner, initialVal);
}

exports.accumulate = accumulate;
