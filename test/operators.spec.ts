/**
 * @fileoverview Unit test suite for src/lib/operators.ts
 */

import { expect } from "chai";
import { operators } from "../src/lib";
import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
} from "../src/constants";

const FUNCTION = "function";

describe("Operators", () => {
  it("Should be an object", () => {
    expect(operators).to.be.an("object");
  });

  it("Should have a `+` method that adds up two or more numbers", () => {
    expect(operators).to.have.property(ADDITION).that.is.a(FUNCTION);
    expect(operators[ADDITION](2, 2)).to.equal(4);
  });

  it("Should have a `-` method that subtracts", () => {
    expect(operators).to.have.property(SUBTRACTION).that.is.a(FUNCTION);
    expect(operators[SUBTRACTION](4, 2)).to.equal(2);
  });

  it("Should have a `*` method that muiltiplies two or more numbers", () => {
    expect(operators).to.have.property(MULTIPLICATION).that.is.a(FUNCTION);
    expect(operators[MULTIPLICATION](2, 2)).to.equal(4);
  });

  it("Should have a `/` method that divides two or more numbers", () => {
    expect(operators).to.have.property(DIVISION).that.is.a(FUNCTION);
    expect(operators[DIVISION](10, 5)).to.equal(2);
  });
});
