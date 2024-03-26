function evaluate(str) {
  const tokens = str.split(/\s+/);
  let result = Number(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = Number(tokens[i + 1]);
    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "-") {
      result -= nextNumber;
    }
  }
  return result;
}

module.exports = evaluate;
