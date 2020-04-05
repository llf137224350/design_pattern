class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number = 18) {
        this.name = name;
        this.age = age;
    }
    public toString() {
        return `${this.name} - ${this.age}`;
    }
}


let person: Person = new Person('狂奔的牛');
console.log(person.toString());
