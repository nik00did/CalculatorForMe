describe('Model', () => {
    describe('sum method',() => {
        const testData = [
            {
                firstNumber: 10,
                secondNumber: 20,
                expected: 30,
            },
            {
                firstNumber: 20,
                secondNumber: 10,
                expected: 30,
            },
            {
                firstNumber: 5.5,
                secondNumber: 2,
                expected: 7.5,
            },
            {
                firstNumber: 0,
                secondNumber: 20,
                expected: 20,
            },
            {
                firstNumber: 10,
                secondNumber: '10',
                expected: '1010',
            },
            {
                firstNumber: 0,
                secondNumber: 20,
                expected: 20,
            },
            {
                firstNumber: 0,
                secondNumber: 0,
                expected: 0,
            },
            {
                firstNumber: 0,
                secondNumber: '0',
                expected: '00',
            },
            {
                firstNumber: null,
                secondNumber: '0',
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: null,
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: void 0,
                expected: void 0,
            },
            {
                firstNumber: void 0,
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: '',
                expected: void 0,
            },
            {
                firstNumber: null,
                secondNumber: null,
                expected: void 0,
            },
        ];

        testData.forEach((data, testNumber) => {
            const {
                expected,
                firstNumber,
                secondNumber,
            } = data;
            const model = new Model();

            const actual = model.sum(firstNumber, secondNumber);

            it(`№${testNumber + 1} test. Should return '${expected}' when first number = '${firstNumber}'(${typeof firstNumber}) and second number = '${secondNumber}'(${typeof secondNumber})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('multiply method', () => {
        const testData = [
            {
                firstNumber: 10,
                secondNumber: 20,
                expected: 200,
            },
            {
                firstNumber: 20,
                secondNumber: 10,
                expected: 200,
            },
            {
                firstNumber: 5.5,
                secondNumber: 2,
                expected: 11,
            },
            {
                firstNumber: 0,
                secondNumber: 20,
                expected: 0,
            },
            {
                firstNumber: 10,
                secondNumber: '10',
                expected: 100,
            },
            {
                firstNumber: 20,
                secondNumber: 0,
                expected: 0,
            },
            {
                firstNumber: 0,
                secondNumber: 0,
                expected: 0,
            },
            {
                firstNumber: 0,
                secondNumber: '0',
                expected: 0,
            },
            {
                firstNumber: null,
                secondNumber: '0',
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: null,
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: void 0,
                expected: void 0,
            },
            {
                firstNumber: void 0,
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: '',
                expected: void 0,
            },
            {
                firstNumber: null,
                secondNumber: null,
                expected: void 0,
            },
        ];

        testData.forEach((data, index) => {
            const {
                expected,
                firstNumber,
                secondNumber,
            } = data;
            const model = new Model();

            const actual = model.multiply(firstNumber, secondNumber);

            it(`№${index + 1} test. Should return '${expected}'(${typeof expected}) when first number = '${firstNumber}'(${typeof firstNumber}) and second number = '${secondNumber}'(${typeof secondNumber})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('substruct method', () => {
        const testData = [
            {
                firstNumber: 10,
                secondNumber: 20,
                expected: -10,
            },
            {
                firstNumber: 20,
                secondNumber: 10,
                expected: 10,
            },
            {
                firstNumber: 5.5,
                secondNumber: 2,
                expected: 3.5,
            },
            {
                firstNumber: 0,
                secondNumber: 20,
                expected: -20,
            },
            {
                firstNumber: 10,
                secondNumber: '10',
                expected: 0,
            },
            {
                firstNumber: 20,
                secondNumber: 0,
                expected: 20,
            },
            {
                firstNumber: 0,
                secondNumber: 0,
                expected: 0,
            },
            {
                firstNumber: 0,
                secondNumber: '0',
                expected: 0,
            },
            {
                firstNumber: null,
                secondNumber: '0',
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: null,
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: void 0,
                expected: void 0,
            },
            {
                firstNumber: void 0,
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: '',
                expected: void 0,
            },
            {
                firstNumber: null,
                secondNumber: null,
                expected: void 0,
            },
        ];

        testData.forEach((data, index) => {
            const {
                expected,
                firstNumber,
                secondNumber,
            } = data;
            const model = new Model();

            const actual = model.subtract(firstNumber, secondNumber);

            it(`№${index + 1} test. Should return '${expected}'(${typeof expected}) when first number = '${firstNumber}'(${typeof firstNumber}) and second number = '${secondNumber}'(${typeof secondNumber})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('divide method', () => {
        const testData = [
            {
                firstNumber: 10,
                secondNumber: 20,
                expected: 0.5,
            },
            {
                firstNumber: 20,
                secondNumber: 10,
                expected: 2,
            },
            {
                firstNumber: 5.5,
                secondNumber: 2,
                expected: 2.75,
            },
            {
                firstNumber: 0,
                secondNumber: 20,
                expected: 0,
            },
            {
                firstNumber: 10,
                secondNumber: '10',
                expected: 1,
            },
            {
                firstNumber: 20,
                secondNumber: 0,
                expected: null,
            },
            {
                firstNumber: 0,
                secondNumber: 0,
                expected: null,
            },
            {
                firstNumber: 0,
                secondNumber: 3,
                expected: 0,
            },
            {
                firstNumber: null,
                secondNumber: '0',
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: null,
                expected: void 0,
            },
            {
                firstNumber: 0,
                secondNumber: void 0,
                expected: void 0,
            },
            {
                firstNumber: void 0,
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: 0,
                expected: void 0,
            },
            {
                firstNumber: '',
                secondNumber: '',
                expected: void 0,
            },
            {
                firstNumber: null,
                secondNumber: null,
                expected: void 0,
            },
            {
                firstNumber: 25,
                secondNumber: 2,
                expected: 12.5,
            },
            {
                firstNumber: 2,
                secondNumber: 0.5,
                expected: 4,
            },
            {
                firstNumber: 1000,
                secondNumber: 0.0001,
                expected: 10000000,
            },
            {
                firstNumber: 1000,
                secondNumber: 5,
                expected: 200,
            },
            {
                firstNumber: 250,
                secondNumber: 0.5,
                expected: 500,
            },
        ];

        testData.forEach((data, index) => {
            const {
                expected,
                firstNumber,
                secondNumber,
            } = data;
            const model = new Model();

            const actual = model.divide(firstNumber, secondNumber);

            it(`№${index + 1} test. Should return '${expected}'(${typeof expected}) when first number = '${firstNumber}'(${typeof firstNumber}) and second number = '${secondNumber}'(${typeof secondNumber})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getPercent method', () => {
        const testData = [
            {
                number: 10,
                expected: 0.1,
            },
            {
                number: 100,
                expected: 1,
            },
            {
                number: 20,
                expected: 0.2,
            },
            {
                number: 1,
                expected: 0.01,
            },
            {
                number: 200,
                expected: 2,
            },
            {
                number: '10',
                expected: 0.1,
            },
            {
                number: '100',
                expected: 1,
            },
            {
                number: '50',
                expected: 0.5,
            },
            {
                number: 0.5,
                expected: 0.005,
            },
            {
                number: 0,
                expected: 0,
            },
            {
                number: null,
                expected: void 0,
            },
            {
                number: void 0,
                expected: void 0,
            },
            {
                number: '',
                expected: void 0,
            },
            {
                number: '0.05',
                expected: 0.0005,
            },
            {
                number: '500',
                expected: 5,
            },
        ];

        testData.forEach((data, index) => {
            const {
                number,
                expected,
            } = data;
            const model = new Model();

            const actual = model.getPercent(number);

            it(`№${index + 1} test. Should return '${expected}'(${typeof expected}) when first number = '${number}'(${typeof number})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});