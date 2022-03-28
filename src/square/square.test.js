const square = require('./square');

describe('square', () => {
    test('should correct value', () => {
        expect(square(2)).toEqual(4);
        expect(square(5)).toBeLessThan(26);
        expect(square(5)).toBeLessThanOrEqual(25);
        expect(square(3)).toBeGreaterThan(7);
    })

    test('Math.pow should be invoked correctly', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        expect(spyMathPow).toBeCalledTimes(0);
        square(3);
        expect(spyMathPow).toBeCalledTimes(1);
        square(1);
        expect(spyMathPow).toBeCalledTimes(1);
        square(4);
        expect(spyMathPow).toBeCalledTimes(2);
    })

    test('Math.pow should not be invoked', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })
})

afterEach(() => {
    jest.clearAllMocks();
})