const evaluate = require("./evaluate");

describe("evaluate", () => {
  it('should return 4 for input "2 + 3 - 1"', () => {
    expect(evaluate("2 + 3 - 1")).toBe(4);
  });

  it('should return 10 for input "5 + 5"', () => {
    expect(evaluate("5 + 5")).toBe(10);
  });

  it('should return 0 for input "2 - 2"', () => {
    expect(evaluate("2 - 2")).toBe(0);
  });

  it('should return -2 for input "-5 + 3"', () => {
    expect(evaluate("-5 + 3")).toBe(-2);
  });

  it('should return 7 for input "3 + 4 + 5 - 5"', () => {
    expect(evaluate("3 + 4 + 5 - 5")).toBe(7);
  });

  it('should return -6 for input "10 - 5 - 5 - 6"', () => {
    expect(evaluate("10 - 5 - 5 - 6")).toBe(-6);
  });
});
