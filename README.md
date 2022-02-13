## Overview

A command-line interface (CLI) reverse polish notation (RPN) calculator for performing basic arithmetic computation like `addition (+)`, `subtraction (-)`, `multiplication (*)` and `division (/)`. This solution uses Object Oriented Programming (OOP) paradigm to structure out the functionality of the RPN calculator. The solution only currently support CLI interface but other interfaces like `File` and `WebSocket` can easily be plugged in to the solution.


### System Requirement
- Node (>= v14)
- Package Manager (NPM or Yarn)

### Folder structure

```
|-- src
  |-- constants
    |-- operator.ts
    |-- index.ts
  |-- lib
    |-- calculator.ts
    |-- operators.ts
    |-- index.ts
  |-- types
    |-- enums.ts
    |-- index.ts
  |-- index.ts
|-- test
  |-- calculator.spec.ts
  |-- operators.spec.ts
-- nodemon.json
-- Dockerfile
```

### Core Technologies

* Javascript
* Node
* Typescript
* Mocha & Chai


### Features

* Ability to perform addtion
* Ability to perform subtraction
* Ability to perform division
* Ability to perform multiplication
* Persisting of result for subsequent use
* Support standard input and output

### Instructions on how to install and run the application

Please follow the instructions below to install and run the application:

* Clone the project using `git clone https://github.com/exquisapp/RPN-Calculator.git`
* On the root folder of the project run `yarn` or `yarn install` to install dependencies of the project
* Then run `yarn start` to start the project

#### Usage

To use the application, please provide your input in the format below:

```Bash

> 5 5 +
10

> 5 5 5 4 + + -
-9

```

Note: To exit the program please use `q` or `Ctrl+D` or `EOF` and to clear the previous stored result please use the `c` command to clear.

### How to add a new operator

* Locate the `src/constants/operator.ts` file and add the new operator as a constant. Example: `export const MODULUS: string = "^"`
* Locate the `src/lib/operators.ts` file and add the new operator function to the operator object as specified below:

```javascript

export const operators = {
  /** 
   * Other functions here
  */

  [MODULUS]: function (x: number, y: number): number {
    return x ^ y;
  },
};

```

### Unit Test

To run the unit test please run the following shell script:

```bash
yarn test
```

### Possible Improvement

* Add more operators
* Cover more edge cases
* Implement multiple interfaces

