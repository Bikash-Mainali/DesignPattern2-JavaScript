class RegularBulb {
    constructor(){
        this.lumenRange = 'between 50 and 100';
        this.lifeSpan = '1 year'
    }

}

class EnergyBulb {
    constructor(){
        this.lumenRange = 'between 5 and 40';
        this.lifeSpan = '10 year';
        this.color = ['red', 'green']
    }
}

class Factory {
    createBulb =(type) => {
        if(type === 'regular'){
            return new RegularBulb();
        }
        else{
            return new EnergyBulb();
        }
    }
}


const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}