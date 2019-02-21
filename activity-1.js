class Developer{
    constructor(first_name,last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    };
    getName(){
        return `${this.first_name} ${this.last_name}`;
    };
};

class JavaScriptDeveloper extends Developer{
    getJob(){
        return 'JavaScript Developer';
    };
};

var dev = new JavaScriptDeveloper('Adrian','Acosta');
console.log(dev.getName());
console.log(dev.getJob());

var getGreeting = () => 'Welcome to React Dev';
console.log(getGreeting());
