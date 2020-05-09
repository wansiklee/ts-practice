"use strict";
// 함수 타입 지정
function sum(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
}
function returnNothing() {
    console.log("hello world");
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) { return console.log(shape.getArea()); });
