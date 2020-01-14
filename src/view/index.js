class View {
    constructor() {
        this.sumButton = null;
        this.divideButton = null;
        this.cancelButton = null;
        this.inputsButtons = null;
        this.multiplyButton = null;
        this.subtractButton = null;
        this.getResultButton = null;
        this.backSpaceButton = null;
        this.getPercentButton = null;
    }

    init = () => {
        const {
            sumButton,
            divideButton,
            cancelButton,
            inputsButtons,
            multiplyButton,
            subtractButton,
            getResultButton,
            backSpaceButton,
            getPercentButton,
        } = buttonIdKeys;

        this.sumButton = document.getElementById(sumButton);
        this.divideButton = document.getElementById(divideButton);
        this.cancelButton = document.getElementById(cancelButton);
        this.inputsButtons = [];
        this.multiplyButton = document.getElementById(multiplyButton);
        this.subtractButton = document.getElementById(subtractButton);
        this.getResultButton = document.getElementById(getResultButton);
        this.backSpaceButton = document.getElementById(backSpaceButton);
        this.getPercentButton = document.getElementById(getPercentButton);
    }
}