const { Rectangle } = require('../src/01-rectangle')

describe('Rectangle class', () => {
    test('should calculate correct area', () => {
        const r1 = new Rectangle(2, 3)
        expect(r1.area()).toBe(6)

    })
    test('should calculate correct perimeter', () => {
        const r1 = new Rectangle(2, 3)
        expect(r1.perimeter()).toBe(10)
    })
})