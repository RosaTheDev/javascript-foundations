class Werewolf {
    constructor(name) {
        this.name = name;
        this.form = 'human';
        this.counter = 0;
        this.hungry = false
    }

    completeTransformation() {
        if(this.counter < 1) {
            this.counter ++;
            this.form = 'wolf';
            this.hungry = true;
            return 'Aaa-Woooo!';
        } else if (this.counter === 1) {
            this.counter -= 1;
            this.form = 'human';
            this.hungry = false;
            return 'Where are I?';
        }
    }

    eatVictim(victim) {
        if(this.form === 'wolf') {
            victim.alive = false;
            this.form = 'human';
            return `Yum, ${victim.name} was delicious.`
        }
        return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
}
module.exports = Werewolf;