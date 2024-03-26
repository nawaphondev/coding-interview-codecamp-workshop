const isStrictlyPalindromic = require("./isStrictlyPalindromic"); // Assuming the function is in a separate file

describe("isStrictlyPalindromic", () => {
  it("returns true for numbers less than or equal to 2", () => {
    expect(isStrictlyPalindromic(0)).toBe(true);
    expect(isStrictlyPalindromic(1)).toBe(true);
    expect(isStrictlyPalindromic(2)).toBe(true);
  });

  it("returns true for perfect square numbers", () => {
    expect(isStrictlyPalindromic(4)).toBe(true);
    expect(isStrictlyPalindromic(9)).toBe(true);
    expect(isStrictlyPalindromic(16)).toBe(true);
  });

  it("returns false for non-palindromic numbers in any base", () => {
    expect(isStrictlyPalindromic(15)).toBe(false);
    expect(isStrictlyPalindromic(37)).toBe(false);
    expect(isStrictlyPalindromic(101, 2)).toBe(false);
  });

  // (Optional) Edge case: large number
  it("handles large numbers correctly", () => {
    expect(isStrictlyPalindromic(1234321)).toBe(true); // Palindrome in base 10
  });
});
