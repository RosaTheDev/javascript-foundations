class Magician {
    constructor(magician) {
        this.name = `The Great ${magician.name}`;
        this.assistant = magician.assistant; 
        this.favoriteAccessory = magician.clothing || 'top hat';
        this.confidencePercentage = 10;
    }

    performIncantation(saying) {
        return `${saying.toUpperCase()}!`;
    }

    performTrick() {
        this.confidencePercentage += 10;
        if(this.favoriteAccessory === 'top hat') {
            return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
        }  else {
            return 'PULL DOVE FROM SLEEVE'
        }
    }

        performShowStopper() {
            if(this.confidencePercentage < 100 || this.assistant === false) {
                return 'Oh no, this trick is not ready!'
            } else {
                return 'WOW! The magician totally just sawed that person in half!';
            }
        }
}
module.exports = Magician;