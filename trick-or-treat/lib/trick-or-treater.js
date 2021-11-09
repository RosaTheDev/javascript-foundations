class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        this.countCandies = 0;
    }

    putCandyInBag(candy) {
        this.bag.candies.push(candy);
        // this.countCandies ++;
        this.hasCandy = true;
        console.log(this.bag.count)
    }
}
module.exports = TrickOrTreater;