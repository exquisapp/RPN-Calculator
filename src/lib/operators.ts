import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from "../constants";

export const operators = {
  [ADDITION]: function (x: number, y: number): number {
    return x + y;
  },
  [SUBTRACTION]: function (x: number, y: number): number {
    return x - y;
  },
  [MULTIPLICATION]: function (x: number, y: number): number {
    return x * y;
  },
  [DIVISION]: function (x: number, y: number): number {
    return x / y;
  },
};
