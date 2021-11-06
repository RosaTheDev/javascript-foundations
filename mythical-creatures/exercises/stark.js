const Direwolf = require("./direwolf");

class Stark {
    constructor(stark) {
        this.name = stark.name;
        this.location = stark.area || 'Winterfell';
        this.safe = false;
    }

    sayHouseWords() {
        if(this.safe === true) {
            return 'The North Remembers';
        }
      return 'Winter is Coming';
    }

    callDirewolf(name, home) {
        var dog = new Direwolf(name, home);
        dog.home = this.location;
        dog.starksToProtect.push({name: this.name, area: this.area});
        this.safe = true;
           
        return dog;
    }
}

module.exports = Stark;