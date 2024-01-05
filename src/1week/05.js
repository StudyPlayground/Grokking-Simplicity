function deepCopy(original) {
  const copy = {};

  for (const [key, value] of Object.entries(original)) {
    if (original.hasOwnProperty(key)) {
      if (typeof value !== 'object' || value === null) {
        copy[key] = value;
      }
      // Symbol 처리 확인
       else if (value instanceof Date) {
      copy[key] = new Date(value);
      } else if (value instanceof RegExp) {
        copy[key] = new RegExp(value);
      } else if (Array.isArray(value)) {
        copy[key] = value.map(deepCopy); 
      } else if (value instanceof Map) {
        const copiedMap = new Map();
        for (const [mapKey, mapValue] of value.entries()) {
          copiedMap.set(mapKey, deepCopy(mapValue));
        }
        copy[key] = copiedMap;
      } else if (value instanceof Set) {
        const copiedSet = new Set();
        for (const setValue of value) {
          copiedSet.add(deepCopy(setValue)); 
        }
        copy[key] = copiedSet;
      } else if (typeof value === 'function') {
        copy[key] = function() {
          return value.apply(this, arguments);
        };
      } else {
        copy[key] = deepCopy(value);
      }
    }
  }

  return copy;
}

exports.deepCopy = deepCopy;
