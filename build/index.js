"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var lib_1 = require("./lib");
var types_1 = require("./types");
var Program = /** @class */ (function () {
    function Program() {
        this.interface = types_1.Interfaces.CLI;
        this.lastResult = 0;
    }
    Program.prototype.run = function () {
        if (this.interface === types_1.Interfaces.CLI) {
            while (true) {
                var input = readline_sync_1.default.prompt();
                if (input === types_1.Commands.Exit) {
                    process.exit();
                }
                else if (input === types_1.Commands.Clear) {
                    this.clearLastResult();
                    continue;
                }
                else {
                    if (this.lastResult !== 0) {
                        input = "".concat(this.lastResult, " ").concat(input);
                    }
                    var calculator = new lib_1.Calculator(input);
                    var result = calculator.compute();
                    this.lastResult = result;
                    console.log(result);
                }
            }
        }
        if (this.interface === types_1.Interfaces.File) {
        }
        if (this.interface === types_1.Interfaces.WebSocket) {
        }
        if (this.interface === types_1.Interfaces.TcpSocket) {
        }
    };
    Program.prototype.clearLastResult = function () {
        this.lastResult = 0;
        console.log("Last saved result cleared successfully!");
    };
    return Program;
}());
var main = function () {
    try {
        console.log("=======================================");
        console.log("==== Welcome to RPN CLI Calculator ====");
        console.log("=======================================\n");
        var program = new Program();
        program.run();
    }
    catch (error) {
        console.error(error.message);
        process.exit();
    }
};
main();
