// 함수 타입 지정
function sum(x: number, y: number): number {
  return x + y;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function returnNothing(): void {
  console.log("hello world");
}

// 인터페이스
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => console.log(shape.getArea()));

// 제네릭
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
