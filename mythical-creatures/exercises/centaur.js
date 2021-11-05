class Centaur {
    constructor(centaurObj) {
       this.name = centaurObj.name;
       this.breed = centaurObj.type;
       this.cranky = false;
       this.standing = true;
       this.layingDown = false;
       this.counter = 0;
    }
    
    shootBow() {
        this.counter ++;
        if(this.counter === 3) {
            this.cranky = true;
        }
        if(this.cranky === true || this.layingDown === true) {
            return 'NO!';
        }
        return 'Twang!!!';
    }

    run() {
        this.counter ++;
        if(this.counter === 3) {
            this.cranky = true;
        }
        if(this.cranky === true || this.layingDown === true) {
            return 'NO!';
        }
        return 'Clop clop clop clop!!!';
    }

    sleep() {
        if(this.layingDown === true) {
           this.cranky = false
            return 'ZZZZ';
        }
        return 'NO!';
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        this.cranky = false;
        if(this.standing === false) {
            return 'Not while I\'m laying down!';
        }
    }


}
module.exports = Centaur;