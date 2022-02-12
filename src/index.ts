import readlineSync from "readline-sync";
import { Calculator } from "./calculator";
import { Interfaces, Commands } from "./types";

class Program {
  private interface: Interfaces = Interfaces.CLI;
  private lastResult: number = 0;

  run(): void {
    if (this.interface === Interfaces.CLI) {
      while (true) {
        let input: string = readlineSync.prompt();

        if (input === Commands.Exit) {
          process.exit();
        } else if (input === Commands.Clear) {
          this.clearLastResult();
          continue;
        } else {

          if (this.lastResult !== 0) {
            input = `${this.lastResult} ${input}`;
          }

          const calculator = new Calculator(input);
          const result = calculator.compute();
          this.lastResult = result;
          console.log(result);
        }
      }
    }

    if (this.interface === Interfaces.File) {
    }

    if (this.interface === Interfaces.WebSocket) {
    }

    if (this.interface === Interfaces.TcpSocket) {
    }
  }

  private clearLastResult(): void {
    this.lastResult = 0;
  }
}

const main = () => {
  try {
    console.log("=======================================");
    console.log("==== Welcome to RPN CLI Calculator ====");
    console.log("=======================================\n");

    const program = new Program();
    program.run();
  } catch (error) {
    process.exit();
  }
};

main();
