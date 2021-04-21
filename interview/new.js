function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

// 模拟new操作
function objectFactory() {
    
    let obj = {};
    Constructor = [].shift.call(arguments)
    console.log([].shift);
    console.log('arguments:',arguments);
    console.log('Constructor:',Constructor,Constructor.prototype);
    
}
let person = objectFactory(Otaku,'Taoism',18)


console.log(Otaku.prototype,Otaku.prototype.__proto__)