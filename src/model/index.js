class Model {
    constructor() {
        this._result = null;
        this._inputData = null;
        this._recordsArray = null;
    }

    sum = (firstNumber, secondNumber) => {
        if ((!firstNumber && firstNumber !== 0) || (!secondNumber && secondNumber !== 0)) {
            return;
        }

        return firstNumber + secondNumber;
    };

    substruct = (firstNumber, secondNumber) => {
        if (!firstNumber || !secondNumber) {
            return;
        }

        return firstNumber - secondNumber;
    };

    multiply = (firstNumber, secondNumber) => {
        if (!firstNumber || !secondNumber) {
            return;
        }

        return firstNumber * secondNumber;
    };

    device = (firstNumber, secondNumber) => {
        if (!firstNumber || !secondNumber) {
            return;
        }

        return firstNumber * secondNumber;
    };

    getPercent = number => {
        if (!number && number !== 0) {
            return;
        }

        return number * 0.01;
    };
}