class Info{
    log =(message) => {
        console.log(message);
    }

}
class Warn{
    log =(message) => {
        console.log(message);
    }
}
class Error{
    log =(message) => {
        console.log(message);
    }
}
class Table{
    log =(message) => {
        console.log(message);
    }
}

class Strategy {
    
    setStrategy = (strategy) => {
        this.loggingStrategy = strategy;
    }
    logging = (msg) => {
        this.loggingStrategy.log(msg);
    }
}


const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);