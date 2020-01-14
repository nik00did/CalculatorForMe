class Model {
    constructor() {
        this.result = null;
        this.inputData = null;
        this.recordsArray = null;
    }

    init = () => {
        this.result = 0;
        this.inputData = 0;
        this.recordsArray = [];
    };

    sum = (firstNumber, secondNumber) => {
        if ((!firstNumber && firstNumber !== 0) || (!secondNumber && secondNumber !== 0)) {
            return;
        }

        return firstNumber + secondNumber;
    };

    subtract = (firstNumber, secondNumber) => {
        if ((!firstNumber && firstNumber !== 0) || (!secondNumber && secondNumber !== 0)) {
            return;
        }

        return firstNumber - secondNumber;
    };

    multiply = (firstNumber, secondNumber) => {
        if ((!firstNumber && firstNumber !== 0) || (!secondNumber && secondNumber !== 0)) {
            return;
        }

        return firstNumber * secondNumber;
    };

    divide = (firstNumber, secondNumber) => {
        if ((!firstNumber && firstNumber !== 0) || (!secondNumber && secondNumber !== 0)) {
            return;
        }

        if (secondNumber === 0) {
            return null;
        }

        return firstNumber / secondNumber;
    };

    getPercent = number => {
        if (!number && number !== 0) {
            return;
        }

        return number * 0.01;
    };

    getResult = () => {
        return this.result;
    };
}