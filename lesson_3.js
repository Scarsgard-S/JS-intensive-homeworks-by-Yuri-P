// TASK 1
/* 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

Массивы в JS считаются "неправильными", потому что они могут содержать в себе различные типы данных,
такие как числа, строки, объекты и длина массива может быть изменена в процессе выполнения программы.
Это делает их неоднородными и совмещающими в себе несколько структур данных, такие как список, стек и очередь. 
*/
console.log("TASK 1\n-");
// Пример массива в JavaScript
let myArray = [1, 'two', true];

// Пример объекта в JavaScript
let myObject = { name: 'John', age: 30, isAdmin: false };

// Пример набора (Set) в JavaScript
let mySet = new Set([1, 2, 3, 4, 5]);

// Пример отображения (Map) в JavaScript
let myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);


 
// TASK 2
/* 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value. Привязать через bind, call, apply.
*/
console.log("\nTASK 2");
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj); // 1

logger.apply(obj); // 2

const boundObj = logger.bind(obj);
boundObj(); // 3



// TASK 3.1
/* Массивы:

- Создайте массив чисел и найдите его сумму.
- Создайте массив строк и объедините их в одну строку.
- Найдите максимальный и минимальный элементы в массиве чисел. 
*/
console.log("\nTASK 3.1");
const arrayOfNumbers = [51, 12, 51, 12, 51, 12, 51];
let sumArray = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray);

const arrayOfStrings = ['Ехал', 'грека', 'через', 'реку'];
const joinArraOfStrings = arrayOfStrings.join(' ');
console.log(joinArraOfStrings);

const arrayOfDifferentNumbers = [22443, 55323, 2252, 43241, 52135, 22423, 52124, 21424, 5252, 2144];
const sortArray = arrayOfDifferentNumbers.sort( (a, b) => (a - b) );
const minOfNumbers = sortArray[0];
const maxOfNumbers = sortArray[sortArray.length - 1];
console.log(minOfNumbers, maxOfNumbers);



// TASK 3.2
/* Stack (стек):

- Реализуйте стек с использованием массива. 
*/
console.log("\nTASK 3.2");
const stack = {
  items: [],

  // Добавление элемента в стек
  push: function(element) {
    this.items.push(element);
  },

  // Изъятие элемента из стека
  pop: function() {
    if (this.items.length === 0) {
      return "Стек пуст";
    }
    return this.items.pop();
  },

  // Получение верхнего элемента из стека без его удаления
  peek: function() {
    return this.items[this.items.length - 1];
  },

  // Определение на пустоту
  isEmpty: function() {
    return this.items.length === 0;
  }
};

// Пример использования
console.log(stack.isEmpty()); // true
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty()); // true



// TASK 3.3 
/* Queue (очередь):

- Реализуйте очередь с использованием массива.
- Имитируйте работу очереди на примере ожидания на кассе.
*/
console.log("\nTASK 3.3");
const queue = {
  elements: [],

  // Добавляем элемент в конец очереди
  enqueue: function(element) {
    this.elements.push(element);
    console.log(`${element} добавлен в очередь`);
  },

  // Удаляем элемент из начала очереди
  dequeue: function() {
    if (this.elements.length === 0) {
      console.log("Очередь пуста");
    } else {
      const removedElement = this.elements.shift();
      console.log(`${removedElement} удален из очереди`);
    }
  },

  // Получаем первый элемент очереди без его удаления
  peek: function() {
    if (this.elements.length === 0) {
      console.log("Очередь пуста");
    } else {
      console.log(`Первый элемент очереди: ${this.elements[0]}`);
    }
  },

  // Проверяем, является ли очередь пустой
  isEmpty: function() {
    if (this.elements.length === 0) {
      console.log("Очередь пуста");
      return true;
    } else {
      console.log("Очередь не пуста");
      return false;
    }
  },

  // Выводим текущее состояние очереди
  printQueue: function() {
    console.log("Текущая очередь:", this.elements);
  }
};

// Пример использования
queue.enqueue("Клиент 1");
queue.enqueue("Клиент 2");
queue.printQueue();
queue.peek();
queue.dequeue();
queue.isEmpty();
queue.printQueue();
