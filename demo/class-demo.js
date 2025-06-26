class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    talk() {
        console.log(`${this.name}: 안녕하세요!`)
    }
}

// const honggildong = new Person("홍길동", 30, "male")
// honggildong.talk()
// console.log(honggildong)

class Student extends Person {
    constructor(name, age, sex, grade) {
        super(name, age, sex);
        this.grade = grade;
    };

    study() {
        console.log(`${this.name} 공부 중...`)
    }
}

const kimOz = new Student("김오즈", 20, "남", 30)
kimOz.study()