function isLongerThan(word, length) {
  return word.length > length;
}

function makeCapitalWithCondition(word, conditionSatisfied) {
  return conditionSatisfied ? word.toUpperCase() : word.toLowerCase();
}

function convertToConditionalUpperCase(words) {
  return words.map((word) =>
    makeCapitalWithCondition(word, isLongerThan(word, 5))
  );
}

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;
