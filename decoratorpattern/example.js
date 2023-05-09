

class User {

    constructor(name){
        this.name = name;
    }
    logger = () => {
        console.log(`user name:  ${user.name}`);
    }
}

class DecoratedUser {
    constructor(user, city, state){
        this.name = user.name;
        this.city = city;
        this.state = state;
    }
    logger = () => {
        console.log(`decorated user => username: ${this.name}  city: ${this.city} state: ${this.state}`);
    }

}

const user = new User("Kelly");
user.logger();
const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();