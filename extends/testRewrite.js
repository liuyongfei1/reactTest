class testRewrite extends someClass{

    constructor(name, age,sex) {
        super(name,age)
        this.sex = sex;
    }

    sayName() {
        alert( 'haha:'+ this.name);
    }

    sayHello() {
        alert(this.age);
    }
}

var test = new testRewrite('dwayne', 27,'男');
test.sayName();
test.sayAge();
