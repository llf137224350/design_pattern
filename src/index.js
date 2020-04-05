const promise = new Promise((resolve) => {
    resolve('hello world');
});
promise.then((res) => {
    console.log(res);
    
});
class Person {

    constructor(name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }
}
console.log(new Person('狂奔的蜗牛').getName());
