class Controller {
    constructor() {
        this.modelMainCalculator = null;
        this.viewMainCalculator = null;
    }

    init = () => {
        this.modelMainCalculator = new ModelMainCalculator();
        this.viewMainCalculator = new ViewMainCalculator();
    }
}