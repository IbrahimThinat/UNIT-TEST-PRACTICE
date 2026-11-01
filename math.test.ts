
import { describe, it, expect } from "vitest";
import { Calculator } from "./math";

describe("Calculator", () => {
  it("adds two numbers", () => {
    const calc = new Calculator();
    expect(calc.addNumbers(2, 3)).toBe(5);
  });

  it("adds negative numbers", () => {
    const calc = new Calculator();
    expect(calc.addNumbers(-3, -5)).toBe(-8);
  });

  it("subtracts two numbers", () => {
    const calc = new Calculator();
    expect(calc.subtractNumbers(10, 4)).toBe(6);
  });

  it("multiplies two numbers", () => {
    const calc = new Calculator();
    expect(calc.multiplyNumbers(3, 4)).toBe(12);
  });

  it("divides two numbers", () => {
    const calc = new Calculator();
    expect(calc.divideNumbers(10, 2)).toBe(5);
  });

  it("returns an error when dividing by zero", () => {
    const calc = new Calculator();
    expect(calc.divideNumbers(10, 0)).toEqual(
      new Error("Cannot divide by zero")
    );
  });

  it("calculates a power", () => {
    const calc = new Calculator();
    expect(calc.powerNumbers(2, 3)).toBe(8);
  });

  it("calculates a square root", () => {
    const calc = new Calculator();
    expect(calc.squareRoot(25)).toBe(5);
  });

  it("returns an error for a negative square root", () => {
    const calc = new Calculator();
    expect(calc.squareRoot(-9)).toEqual(
      new Error("Cannot calculate square root of a negative number")
    );
  });

  it("calculates a percentage", () => {
    const calc = new Calculator();
    expect(calc.calculatePercentage(200, 10)).toBe(20);
  });
});
