//// [parserES5ForOfStatement15.ts]
for (var [a, b] of X) {
}

//// [parserES5ForOfStatement15.js]
var __read = (this && this.__read) || function (o, n) {
    if (!(m = typeof Symbol === "function" && o[Symbol.iterator])) return o;
    var m, i = m.call(o), ar = [], r, e;
    try { while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value); }
    catch (error) { e = { error: error }; }
    finally { try { if (m = !(r && r.done) && i["return"]) m.call(i); } finally { if (e) throw e.error; } }
    return ar;
};
var __values = (this && this.__values) || function (o) { return (i = typeof Symbol === "function" && o[Symbol.iterator] || 0) ? i.call(o) : { next: function () { return { done: d = d || i >= o.length, value: d ? void 0 : o[i++] }; } }; var i, d; };
var __step = (this && this.__step) || function (r) { return !(r.done || (r.done = (r.result = r.iterator.next()).done)); };
var __close = (this && this.__close) || function (r) { return (m = !(r && r.done) && r.iterator["return"]) && m.call(r.iterator); var m; };
try {
    for (var X_1 = { iterator: __values(X) }; __step(X_1);) {
        var _a = __read(X_1.result.value, 2), a = _a[0], b = _a[1];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try { __close(X_1); } finally { if (e_1) throw e_1.error; }
}
var e_1;
