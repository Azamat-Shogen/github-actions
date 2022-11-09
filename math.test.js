const { add, subtract, divide, multiply } = require('./math');

describe("Math.js tests", () => {
    it("should tesd add function ", () => {
        expect(add(2, 2)).toBe(4)
    });

    it("should tesd subtract function ", () => {
        expect(subtract(2, 2)).toBe(0)
    });

    it("should tesd divide function ", () => {
        expect(divide(2, 2)).toBe(1)
    });

    it("should test multiply function ", () => {
        expect(multiply(2, 2)).toBe(4)
    });

});