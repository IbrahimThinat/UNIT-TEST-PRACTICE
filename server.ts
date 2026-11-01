
import express, { Request, Response } from "express";
import { Calculator } from "./math";

const app = express();
const calculator = new Calculator();

app.use(express.json());


function isValidNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

 
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ message: "Calculator API is running!" });
});


app.post("/api/calculator/add", (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return res.status(400).json({ error: "Please provide valid numbers a and b." });
  }

  res.json({ result: calculator.addNumbers(a, b) });
});


app.post("/api/calculator/subtract", (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return res.status(400).json({ error: "Please provide valid numbers a and b." });
  }

  res.json({ result: calculator.subtractNumbers(a, b) });
});


app.post("/api/calculator/multiply", (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return res.status(400).json({ error: "Please provide valid numbers a and b." });
  }

  res.json({ result: calculator.multiplyNumbers(a, b) });
});


app.post("/api/calculator/divide", (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return res.status(400).json({ error: "Please provide valid numbers a and b." });
  }

  const result = calculator.divideNumbers(a, b);

  if (result instanceof Error) {
    return res.status(400).json({ error: result.message });
  }

  res.json({ result });
});


app.post("/api/calculator/power", (req: Request, res: Response) => {
  const { base, exponent } = req.body;

  if (!isValidNumber(base) || !isValidNumber(exponent)) {
    return res.status(400).json({ error: "Please provide valid base and exponent numbers." });
  }

  res.json({ result: calculator.powerNumbers(base, exponent) });
});


app.post("/api/calculator/square-root", (req: Request, res: Response) => {
  const { number } = req.body;

  if (!isValidNumber(number)) {
    return res.status(400).json({ error: "Please provide a valid number." });
  }

  const result = calculator.squareRoot(number);

  if (result instanceof Error) {
    return res.status(400).json({ error: result.message });
  }

  res.json({ result });
});


app.post("/api/calculator/percentage", (req: Request, res: Response) => {
  const { number, percentage } = req.body;

  if (!isValidNumber(number) || !isValidNumber(percentage)) {
    return res.status(400).json({ error: "Please provide valid number and percentage values." });
  }

  res.json({ result: calculator.calculatePercentage(number, percentage) });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Calculator API is running at http://localhost:${PORT}`);
});
