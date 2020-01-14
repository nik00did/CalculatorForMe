class Controller {
    constructor() {
        this.modelMainCalculator = null;
        this.viewMainCalculator = null;
    }

    init = () => {
        this.viewMainCalculator = new ViewMainCalculator();
        this.modelMainCalculator = new ModelMainCalculator();

        // this.viewMainCalculator.init();
        // this.modelMainCalculator.init();
    }
}