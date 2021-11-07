class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {dresses: ['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
    }
    receiveBelief() {
        this.dust ++
    }

    believe() {
        this.dust += 10
    }

    makeDresses(array) {
        for(var i = 0; i < array.length; i++) {
            this.clothes.dresses.push(array[i]);
        }
    }

    becomeProvoked() {
        this.disposition = 'Vengeful';
    }

    replaceInfant(child) {
        if(this.disposition === 'Vengeful') {
            this.humanWards.push(child)
            child.disposition = 'Malicious';
        } 
        if(this.humanWards.length === 3) {
            this.disposition = 'Good natured';
        }
        return child;
    }
}
module.exports = Fairy;