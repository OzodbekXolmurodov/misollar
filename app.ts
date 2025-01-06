
// Inheritance
// №1

class Person {
    userName: string;
    age: number;
    email: string;
    isMarried: boolean


    constructor(userName: string, age: number, email: string) {
        this.userName = userName;
        this.age = age;
        this.email = email;
    }
    getInfo(): string {
        return `${this.userName} ${this.age}-yosh ${this.age < 22 ? "Turmush qurmagan" : "Turmush qurgan"} gmaeli-${this.email}`
    }
}

class Student extends Person {
    id: number;

    constructor(userName: string, age: number, email: string, id: number) {
        super(userName, age, email);
        this.id = id;
    }
}

let student = new Student("Alibek", 16, "alimov@gmail.com", 1);
console.log(student.getInfo());



class Animals {
    turi: string;
    ozuqasi: string;
    constructor(turi: string, ozuqasi: string) {
        this.turi = turi;
        this.ozuqasi = ozuqasi;
    }
}

class UyHayvonlari extends Animals {
    hayvonNomi: string;

    constructor(turi: string, ozuqasi: string, hayvonNomi: string) {
        super(turi, ozuqasi);
        this.hayvonNomi = hayvonNomi
    }
}

let hayvonlar = new UyHayvonlari("Yirtqich", "Meat", "Tiger")
console.log(hayvonlar);



// Encapsulation
// №2

class Car {
    private model: string;
    public price: number;
    private year: number;
    readonly color: string;
    constructor(model: string, price: number, year: number, color: string) {
        this.model = model;
        this.price = price;
        this.year = year;
        this.color = color;
    }
}

let car = new Car('BMW', 300000, 2024, 'Black')
console.log(car);



// Abstraction
// №3

abstract class Shape {
    abstract calculatePerimeter(): number;
}

class Rect extends Shape {
    a: number;
    b: number;
    d: number;
    constructor(a: number, b: number, d: number) {
        super();
        this.a = a;
        this.b = b;
        this.d = d;
    }
    calculatePerimeter(): number {
        return 4 * (this.a + this.b / this.d);
    }
}

let rect = new Rect(5, 2, 2)
console.log(rect.calculatePerimeter());


class Circle extends Shape {
    r: number;
    constructor(r: number) {
        super();
        this.r = r;
    }
    calculatePerimeter(): number {
        return 2 * this.r * Math.PI;
    }
}

let circle = new Circle(4)
console.log(circle.calculatePerimeter());



// Polymorphism
// №4

class Payment{
    pay(amount: number){
        return `${amount} so'm miqdorida to'lov amalga oshirildi`
    }
}
 
class CashPayment extends Payment{
    pay(amount: number): string {
        return `${amount} so'm miqdorida naqd pul kurinishida to'lov qabul qilindi`
    }
}

class CardPayment extends Payment{
    pay(amount: number): string {
        return `${amount} so'm miqdorida karta orqali to'lov amalga oshirildi`
    }
}

let payment = new Payment();
let cash = new CashPayment();
let card = new CardPayment();
console.log(payment.pay(50000));
console.log(cash.pay(132000));
console.log(card.pay(270800));

