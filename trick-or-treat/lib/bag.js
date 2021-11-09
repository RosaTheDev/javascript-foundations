class Bag {
    constructor() {
        this.empty = true;
        this.count = 0;
        this.candies = [];
    }
    fill(candy) {
        // this.count ++;
        this.candies.push(candy);
        this.count = this.candies.length
    }

    contains(specificCandy) {
        for(var i = 0; i < this.candies.length; i++) {
            if(this.candies[i].type === specificCandy) {
                return true;
            }
            return false;
        }
    }
}
module.exports = Bag;