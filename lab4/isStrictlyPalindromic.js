function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function isStrictlyPalindromic(n) {
  if (n <= 2) return true; 
  if (Math.sqrt(n) % 1 === 0) return true;

  for (let base = 2; base <= Math.floor(n / 2); base++) {
    const numInBase = n
      .toString(base)
      .padStart(Math.ceil(Math.log(n + 1) / Math.log(base)), "0");
    if (!isPalindrome(numInBase)) {
      return false;
    }
  }
  return true;
}

module.exports = isStrictlyPalindromic;
