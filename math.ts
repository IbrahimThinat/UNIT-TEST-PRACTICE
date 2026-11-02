
export class Calculator {


  addNumbers(a: number, b: number): number {
    return a + b;
  }

  
  subtractNumbers(a: number, b: number): number {
    return a - b;
  }

 
  multiplyNumbers(a: number, b: number): number {
    return a * b;
  }


  divideNumbers(a: number, b: number): number | Error {
    if (b === 0) {
      return new Error("Cannot divide by zero");
    }

    return a / b;
  }
  
  powerNumbers(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  squareRoot(number: number): number | Error {
    if (number < 0) {
      return new Error("Cannot calculate square root of a negative number");
    }

    return Math.sqrt(number);
  }

 calculatePercentage(number: number, percentage: number): number {
    return (number * percentage) / 100;
  }
}
