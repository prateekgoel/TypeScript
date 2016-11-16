//// [arrayLiterals2ES5.ts]
// ElementList:  ( Modified )
//      Elisionopt   AssignmentExpression
//      Elisionopt   SpreadElement
//      ElementList, Elisionopt   AssignmentExpression
//      ElementList, Elisionopt   SpreadElement

// SpreadElement:
//      ...   AssignmentExpression

var a0 = [,, 2, 3, 4]
var a1 = ["hello", "world"]
var a2 = [, , , ...a0, "hello"];
var a3 = [,, ...a0]
var a4 = [() => 1, ];
var a5 = [...a0, , ]

// Each element expression in a non-empty array literal is processed as follows:
//    - If the array literal contains no spread elements, and if the array literal is contextually typed (section 4.19)
//      by a type T and T has a property with the numeric name N, where N is the index of the element expression in the array literal,
//      the element expression is contextually typed by the type of that property.

// The resulting type an array literal expression is determined as follows:
//     - If the array literal contains no spread elements and is contextually typed by a tuple-like type,
//       the resulting type is a tuple type constructed from the types of the element expressions.

var b0: [any, any, any] = [undefined, null, undefined];
var b1: [number[], string[]] = [[1, 2, 3], ["hello", "string"]];

// The resulting type an array literal expression is determined as follows:
//     - If the array literal contains no spread elements and is an array assignment pattern in a destructuring assignment (section 4.17.1),
//       the resulting type is a tuple type constructed from the types of the element expressions.

var [c0, c1] = [1, 2];        // tuple type [number, number]
var [c2, c3] = [1, 2, true];  // tuple type [number, number, boolean]

// The resulting type an array literal expression is determined as follows:
//      - the resulting type is an array type with an element type that is the union of the types of the
//        non - spread element expressions and the numeric index signature types of the spread element expressions
var temp = ["s", "t", "r"];
var temp1 = [1, 2, 3];
var temp2: [number[], string[]] = [[1, 2, 3], ["hello", "string"]];
var temp3 = [undefined, null, undefined];
var temp4 = [];

interface myArray extends Array<Number> { }
interface myArray2 extends Array<Number|String> { }
var d0 = [1, true, ...temp,];  // has type (string|number|boolean)[]
var d1 = [...temp];            // has type string[]
var d2: number[] = [...temp1];
var d3: myArray = [...temp1];
var d4: myArray2 = [...temp, ...temp1];
var d5 = [...temp3];
var d6 = [...temp4];
var d7 = [...[...temp1]];
var d8: number[][] = [[...temp1]]
var d9 = [[...temp1], ...["hello"]];

//// [arrayLiterals2ES5.js]
// ElementList:  ( Modified )
//      Elisionopt   AssignmentExpression
//      Elisionopt   SpreadElement
//      ElementList, Elisionopt   AssignmentExpression
//      ElementList, Elisionopt   SpreadElement
var __read = (this && this.__read) || function (o, n) {
    if (!(m = typeof Symbol === "function" && o[Symbol.iterator])) return o;
    var m, i = m.call(o), ar = [], r, e;
    try { while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value); }
    catch (error) { e = { error: error }; }
    finally { try { if (m = !(r && r.done) && i["return"]) m.call(i); } finally { if (e) throw e.error; } }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
// SpreadElement:
//      ...   AssignmentExpression
var a0 = [, , 2, 3, 4];
var a1 = ["hello", "world"];
var a2 = __spread([, , ], a0, ["hello"]);
var a3 = __spread([, ], a0);
var a4 = [function () { return 1; },];
var a5 = __spread(a0, [,]);
// Each element expression in a non-empty array literal is processed as follows:
//    - If the array literal contains no spread elements, and if the array literal is contextually typed (section 4.19)
//      by a type T and T has a property with the numeric name N, where N is the index of the element expression in the array literal,
//      the element expression is contextually typed by the type of that property.
// The resulting type an array literal expression is determined as follows:
//     - If the array literal contains no spread elements and is contextually typed by a tuple-like type,
//       the resulting type is a tuple type constructed from the types of the element expressions.
var b0 = [undefined, null, undefined];
var b1 = [[1, 2, 3], ["hello", "string"]];
// The resulting type an array literal expression is determined as follows:
//     - If the array literal contains no spread elements and is an array assignment pattern in a destructuring assignment (section 4.17.1),
//       the resulting type is a tuple type constructed from the types of the element expressions.
var _a = [1, 2], c0 = _a[0], c1 = _a[1]; // tuple type [number, number]
var _b = [1, 2, true], c2 = _b[0], c3 = _b[1]; // tuple type [number, number, boolean]
// The resulting type an array literal expression is determined as follows:
//      - the resulting type is an array type with an element type that is the union of the types of the
//        non - spread element expressions and the numeric index signature types of the spread element expressions
var temp = ["s", "t", "r"];
var temp1 = [1, 2, 3];
var temp2 = [[1, 2, 3], ["hello", "string"]];
var temp3 = [undefined, null, undefined];
var temp4 = [];
var d0 = __spread([1, true], temp); // has type (string|number|boolean)[]
var d1 = __spread(temp); // has type string[]
var d2 = __spread(temp1);
var d3 = __spread(temp1);
var d4 = __spread(temp, temp1);
var d5 = __spread(temp3);
var d6 = __spread(temp4);
var d7 = __spread(temp1);
var d8 = [__spread(temp1)];
var d9 = __spread([__spread(temp1)], ["hello"]);
