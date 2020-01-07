class ViewMainCalculator {
    constructor() {
        this.emptyDivForMenu = null;
        this.header = null;
    }

    init = () => {
        this.emptyDivForMenu = document.getElementById('emptyDivForMenu');
        this.header = document.getElementById('header');
    }
}