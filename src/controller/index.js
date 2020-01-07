class Controller {
    constructor() {
        this.modelMainCalculator = null;
        this.viewMainCalculator = null;
    }

    init = () => {
        this.modelMainCalculator = new ModelMainCalculator();
        this.viewMainCalculator = new ViewMainCalculator();

        this.viewMainCalculator.init();

        this.viewMainCalculator.emptyDivForMenu.onmouseover = showMenu;
        console.log('Init is called');
    }
}