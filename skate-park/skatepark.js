class SkatePark {
    constructor(park) {
         this.name = park.name;
         this.yearFounded = park.year;
         this.style = park.type
         this.features = park.features;
         this.isPrivate = park.isPrivate || false;
         this.cost = park.price || 0;
         this.occupants = [];
    }

    admit(skater) {
        if(this.cost === 0) {
            this.occupants.push(skater)
            return `Welcome to the free ${this.name} Skatepark!`
        } 
        if(this.isPrivate === true && skater.money >= this.cost){
            if(this.occupants.length <= 2) {
                skater.money = skater.money - this.cost
                this.occupants.push(skater);
                return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
            }
            return 'Sorry, we are at max capacity. Thank you for understanding.'
            
        }
        return 'Sorry, you don\'t have enough money.'
    }
}
module.exports = SkatePark;