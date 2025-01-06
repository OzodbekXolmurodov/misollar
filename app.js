// Inheritance
// №1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName, age, email) {
        this.userName = userName;
        this.age = age;
        this.email = email;
    }
    Person.prototype.getInfo = function () {
        return "".concat(this.userName, " ").concat(this.age, "-yosh ").concat(this.age < 22 ? "Turmush qurmagan" : "Turmush qurgan", " gmaeli-").concat(this.email);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, email, id) {
        var _this = _super.call(this, userName, age, email) || this;
        _this.id = id;
        return _this;
    }
    return Student;
}(Person));
var student = new Student("Alibek", 16, "alimov@gmail.com", 1);
console.log(student.getInfo());
var Animals = /** @class */ (function () {
    function Animals(turi, ozuqasi) {
        this.turi = turi;
        this.ozuqasi = ozuqasi;
    }
    return Animals;
}());
var UyHayvonlari = /** @class */ (function (_super) {
    __extends(UyHayvonlari, _super);
    function UyHayvonlari(turi, ozuqasi, hayvonNomi) {
        var _this = _super.call(this, turi, ozuqasi) || this;
        _this.hayvonNomi = hayvonNomi;
        return _this;
    }
    return UyHayvonlari;
}(Animals));
var hayvonlar = new UyHayvonlari("Yirtqich", "Meat", "Tiger");
console.log(hayvonlar);
// Encapsulation
// №2
var Car = /** @class */ (function () {
    function Car(model, price, year, color) {
        this.model = model;
        this.price = price;
        this.year = year;
        this.color = color;
    }
    return Car;
}());
var car = new Car('BMW', 300000, 2024, 'Black');
console.log(car);
// Abstraction
// №3
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(a, b, d) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.d = d;
        return _this;
    }
    Rect.prototype.calculatePerimeter = function () {
        return 4 * (this.a + this.b / this.d);
    };
    return Rect;
}(Shape));
var rect = new Rect(5, 2, 2);
console.log(rect.calculatePerimeter());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.calculatePerimeter = function () {
        return 2 * this.r * Math.PI;
    };
    return Circle;
}(Shape));
var circle = new Circle(4);
console.log(circle.calculatePerimeter());
// Polymorphism
// №4
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.pay = function (amount) {
        return "".concat(amount, " so'm miqdorida to'lov amalga oshirildi");
    };
    return Payment;
}());
var CashPayment = /** @class */ (function (_super) {
    __extends(CashPayment, _super);
    function CashPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashPayment.prototype.pay = function (amount) {
        return "".concat(amount, " so'm miqdorida naqd pul kurinishida to'lov qabul qilindi");
    };
    return CashPayment;
}(Payment));
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPayment.prototype.pay = function (amount) {
        return "".concat(amount, " so'm miqdorida karta orqali to'lov amalga oshirildi");
    };
    return CardPayment;
}(Payment));
var payment = new Payment();
var cash = new CashPayment();
var card = new CardPayment();
console.log(payment.pay(50000));
console.log(cash.pay(132000));
console.log(card.pay(270800));
