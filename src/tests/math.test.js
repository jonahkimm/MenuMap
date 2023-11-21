import sum from "./math"

describe("test sum", () => {
    test("adds 2+3 to equal 5", () => {
        expect(sum(3,2)).toBe(5);
    });
})