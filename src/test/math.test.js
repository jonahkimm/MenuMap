import sum from "./math"

describe("test sum", () => {
    test("adds 1+2 to equal 3", () => {
        expect(sum(1,2)).toBe(3);
    });
})