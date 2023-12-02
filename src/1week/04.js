function convertUpperCase(stringParam) {
  return stringParam.toUpperCase();
}

function convertLowerCase(stringParam) {
  return stringParam.toLowerCase();
}

function isLongWord(word) {
  return word.length > 5;
}

function convertToConditionalUpperCase(words) {
  return words.map(word => isLongWord(word) ? convertUpperCase(word) : convertLowerCase(word));
}

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;
