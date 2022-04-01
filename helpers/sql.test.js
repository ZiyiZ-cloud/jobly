const jwt = require("jsonwebtoken");
const { sqlForPartialUpdate } = require("./sql");
const { SECRET_KEY } = require("../config");

// describe("sqlForPartialUpdate", function() {
//     test("first", function() {
//         const result = sqlForPartialUpdate({ column1: 'value' }, { column1: 'old' });
//         expect(result).toEqual({
//             setCols: column1 = $1,
//             values: ['value'],
//         })
//     })
// })
describe("sqlForPartialUpdate", function() {
    test("works: 1 item", function() {
        const result = sqlForPartialUpdate({ f1: "v1" }, { f1: "f1", fF2: "f2" });
        expect(result).toEqual({
            setCols: "\"f1\"=$1",
            values: ["v1"],
        });
    });

    test("works: 2 items", function() {
        const result = sqlForPartialUpdate({ f1: "v1", jsF2: "v2" }, { jsF2: "f2" });
        expect(result).toEqual({
            setCols: "\"f1\"=$1, \"f2\"=$2",
            values: ["v1", "v2"],
        });
    });
});

// not really sure what is second input value in the function represent