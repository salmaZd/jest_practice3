let myTesting = require("./map")

test ("to check if there is a property called name ", ()=> {
    expect(myTesting).toHaveProperty("favorate_colors", ["purple", "gray", "black", "pink"])
})