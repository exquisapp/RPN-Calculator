import { operators } from "./operators";

export class Calculator {
  private arity: number = 2;

  private sanitizeInput(input: string | string[]): string[] {
    if (typeof input === "string") {
      input = input.split(/\s+/);
    } else if (!Array.isArray(input)) {
      throw new TypeError("The provided input is invalid");
    }

    return input;
  }

  private tokenizer(tokens: string[]) {
    return tokens.map((token: string) => {
      return operators[token] || parseFloat(token);
    });
  }

  private calculate(tokens: Array<number | any>) {
    let stack: number[] = [];

    for (const token of tokens) {
      if (typeof token === "number" && !isNaN(token) && isFinite(token)) {
        stack.push(token);
      } else if (typeof token === "function") {
        if (stack.length < this.arity) {
          throw new Error("Provide more values");
        }
        stack.push(token.apply(null, stack.splice(-2)));
      } else {
        throw new TypeError("Invalid input token");
      }
    }

    if (stack.length !== 1) throw new Error("Too many values");
    return stack[0];
  }

  public compute(input: string): number {
    return this.calculate(this.tokenizer(this.sanitizeInput(input)));
  }
}
