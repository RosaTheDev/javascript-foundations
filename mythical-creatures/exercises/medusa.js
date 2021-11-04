var Person = require('./person');
var Statue = require('./statue');
class Medusa {
    constructor(name) {
       
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        var newStatue = new Statue(victim.name);
        if(this.statues.length < 3) {
            this.statues.push(newStatue)
        } else if(this.statues.length >= 3){
            var freedPerson = this.statues.shift();
            this.statues.push(newStatue);
            var newPerson = new Person(freedPerson.name);
            newPerson.mood = 'relieved'
            return newPerson
        }
    }
}

module.exports = Medusa;