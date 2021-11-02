class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || 'scallywag'; 
        this.cursed = false;
        this.booty = 0;
    }

    robShip() {
        if(this.booty <= 400) {
            this.booty += 100
        } else {
        this.cursed = true;
        return 'ARG! I\'ve been cursed!'
        }
        return 'YAARRR!';
    }

    liftCurse() {
        if(this.booty < 500) {
            return 'You don\'t need to lift a curse!'
        }
            this.booty -= 300;
            this.cursed = false;
            return 'Your curse has been lifted!'
    }
}
module.exports = Pirate;