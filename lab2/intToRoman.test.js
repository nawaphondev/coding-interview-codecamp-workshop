const intToRoman = require("./intToRoman");

describe("intToRoman", () => {
  it('should convert 3 to "III"', () => {
    expect(intToRoman(3)).toBe("III");
  });

  it('should convert 58 to "LVIII"', () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it('should convert 1994 to "MCMXCIV"', () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });
});
