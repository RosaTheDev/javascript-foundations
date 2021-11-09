class LunchBox {
    constructor(lunchBox) {
        this.owner = lunchBox.owner;
        this.material = lunchBox.madeOf;
        this.shape = lunchBox.shape;
        this.color = lunchBox.color;
        this.snacks = [];
        this.healthySnack = [];
    }

    acquireSnack(fruitSnack) {
        this.snacks.push(fruitSnack);
        this.fruitSnack = fruitSnack;
        fruitSnack.isInLunchBox = true;
        if(this.fruitSnack.type.includes('fruit') === true || this.fruitSnack.type.includes('Fruit') === true) {
                this.healthySnack.push(this.fruitSnack.type);
            }
    }

    findHealthySnacks() {
        return this.healthySnack;
            
    }
}

module.exports = LunchBox;
