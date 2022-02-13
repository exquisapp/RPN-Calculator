"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.operators = void 0;
var constants_1 = require("../constants");
exports.operators = (_a = {},
    _a[constants_1.ADDITION] = function (x, y) {
        return x + y;
    },
    _a[constants_1.SUBTRACTION] = function (x, y) {
        return x - y;
    },
    _a[constants_1.MULTIPLICATION] = function (x, y) {
        return x * y;
    },
    _a[constants_1.DIVISION] = function (x, y) {
        return x / y;
    },
    _a);
