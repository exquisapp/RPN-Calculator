/**
 * @fileoverview Unit test suite for src/lib/operators.ts
 */

import { expect } from "chai";
import { operators } from "../src/lib";

describe("Operators", () => {
  it("Should be an object", () => {
    expect(operators).to.be.an("object");
  });
});
