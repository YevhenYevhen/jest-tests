const mapArrtoString = require('./mapArrtoString');

describe('mapArrtoString', () => {
    test('should correct value', () => {
        expect(mapArrtoString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('should correct value', () => {
        expect(mapArrtoString([1, 2, 3, null, undefined, '11'])).toEqual(['1', '2', '3']);
    })
    test('should correct value', () => {
        expect(mapArrtoString([])).toEqual([]);
    })
    test('should correct value', () => {
        expect(mapArrtoString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
})