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
        ];

        testData.forEach((data, testNumber) => {
            const { firstNumber, secondNumber, expected } = data;
            const model = new Model();

            const actual = Model.sum(firstNumber, secondNumber);

            it(`№${testNumber + 1} test. Should return '${expected}' when first number = '${firstNumber}'(${typeof firstNumber}) and second number = '${secondNumber}'(${typeof secondNumber})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('multiply method', () => {

    });
});