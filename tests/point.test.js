const { Point } = require('../src/02-point')

describe('point class', () => {
    test('change x coordinate by dx and y coordinate by dy', () =>{
        const p1 = new Point(2, 3)
        expect(p1.move(2, 3)).toBe(4)
    })

    test('flip x and y coordinates', () =>{
        const p1 = new Point(2, 3)
        expect(p1.reflect()).toBe(3, 2)
    })

    test('multiply x and y coordinates by constant k', () =>{
        const p1 = new Point(2, 3)
        expect(p1.stretch(4)).toBe(8, 12)
    })
})