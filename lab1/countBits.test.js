// Import function

const countBits = require('./countBits');

describe('countBits', () => {
  it('should return the correct array for n = 2', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it('should return the correct array for n = 5', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });

});


