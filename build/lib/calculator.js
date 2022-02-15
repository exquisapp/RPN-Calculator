"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var operators_1 = require("./operators");
var Calculator = /** @class */ (function () {
    function Calculator(input) {
        this.arity = 2;
        this.input = "";
        this.input = input;
    }
    Calculator.prototype.isNumber = function (value) {
        return typeof value === "number" && !isNaN(value) && isFinite(value);
    };
    Calculator.prototype.sanitizeInput = function (input) {
        if (typeof input === "string") {
            input = input.split(/\s+/);
        }
        else if (!Array.isArray(input)) {
            throw new TypeError("The provided input is invalid");
        }
        return input;
    };
    Calculator.prototype.tokenizeInput = function (tokens) {
        return tokens.map(function (token) {
            return operators_1.operators[token] || parseFloat(token);
        });
    };
    Calculator.prototype.calculate = function (tokens) {
        var stack = [];
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (this.isNumber(token)) {
                stack.push(token);
            }
            else if (typeof token === "function") {
                if (stack.length < this.arity)
                    throw new Error("Provide more values");
                stack.push(token.apply(null, stack.splice(-2)));
            }
            else {
                throw new TypeError("Invalid input token");
            }
        }
        if (stack.length !== 1)
            throw new Error("Too many values");
        return stack[0];
    };
    Calculator.prototype.compute = function () {
        var result = Math.round(this.calculate(this.tokenizeInput(this.sanitizeInput(this.input))) * 100) / 100;
        return result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
