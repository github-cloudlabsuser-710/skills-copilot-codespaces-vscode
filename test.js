class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this;
    }

    subtract(number) {
        this.result -= number;
        return this;
    }

    multiply(number) {
        this.result *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Usage example
const calc = new Calculator();
calc.add(5).subtract(2).multiply(3).divide(1);
console.log(calc.getResult()); // Outputs: 9