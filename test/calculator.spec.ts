/**
 * @fileoverview Unit test suite for src/lib/calculator.ts
 */

import { expect } from "chai";
import { Calculator } from "../src/lib";

describe("Calculator", () => {
  it("Should perform calculation of addtion correctly", () => {
    const calculator = new Calculator("2 3 +");
    const result = calculator.compute();
    expect(result).to.equal(5);
  });

  it("Should perform subtraction correctly", () => {
    const calculator = new Calculator("5 1 -");
    const result = calculator.compute();
    expect(result).to.equal(4);
  });

  it("Should perform multiplication correctly", () => {
    const calculator = new Calculator("3 3 *");
    const result = calculator.compute();
    expect(result).to.equal(9);
  });

  it("Should perform division correctly", () => {
    const calculator = new Calculator("20 10 /");
    const result = calculator.compute();
    expect(result).to.equal(2);
  });

  it("Should perform computation of multiple operators correctly 1", () => {
    const calculator = new Calculator("5 5 5 8 + + -");
    const result = calculator.compute();
    expect(result).to.equal(-13);
  });

  it("Should perform computation of multiple operators correctly 2", () => {
    const calculator = new Calculator("-3 -2 *");
    const result = calculator.compute();
    expect(result).to.equal(6);
  });

  it("Should throw an Error when called with too few values", () => {
    function run() {
      const calculator = new Calculator("5 -");
      calculator.compute();
    }
    expect(run).to.throw(Error, "Provide more values");
  });

  it("Should throw an Error when invalid input is provided", () => {
    function run() {
      const calculator = new Calculator("hello");
      calculator.compute();
    }
    expect(run).to.throw(Error, "Invalid input token");
  });
});
