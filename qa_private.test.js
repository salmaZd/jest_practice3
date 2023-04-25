const myTesting = require("./qa_private")

test("test the number inside my array", () => {
    expect(myTesting).not.toContain("abu bilal")
})

test(" same as pervious one to check if my array dose not contains the name abed", () => {
    for (let i = 0; i < myTesting.length; i++) {
        expect(myTesting).not.toContain("abed");
    }
});

test(" tocheck if my array dosent have any number inside it ", () => {
    for (let i = 0; i < myTesting.length; i++) {
        expect(isNaN(myTesting[i])).toBe(false)
    }
});

test(" check if my array first element is larger than 1", () => {
    for (let i = 0; i < myTesting.length; i++) {
        expect(myTesting[i]).toBeGreaterThan(4)
    }
});