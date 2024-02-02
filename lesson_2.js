/*****
TASK 1 – Создать объект counter всеми возможными способами;
*****/
// Литера объекта (1)
const counter = {};

const counter1 = {
    value: 10,
    overField: 20,
}

// Конструктор Object (2)
const counter2 = new Object({ name: "Andrey", age: "32" });

// Функция конструктор (3)
function CreateObject() {
    this.name = "example";
}
const counter3 = new CreateObject();

// Object.create() (4)
let Dmitriy = "Дмитрий";

const counter4 = Object.create({
    name: {
        writebale: true,
        value: Dmitriy
    },
});

// Object.assign() копирование свойст из объектов в новый объект или уже в существующий с перезаписью свойств (5)
const counter5 = Object.assign({}, counter2);

// Классы (ES6+) (6)
class Counter {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const counter6 = new Counter("Maria", 23);

// Фабричные функции (7)
function CreateObjectFromFabricFunction(name, age) {
    return {
        name: name,
        age: age
    };
};

const counter7 = CreateObjectFromFabricFunction("Katerina", 16);



/***** 
TASK 2 – Скопировать объект counter всеми возможными способами;
*****/
const simpleObject = {
    country: "Japan",
    capital: "Tokyo"
};

const personInUSA = {
    name: "John",
    age: 25,
    address: {
       street: {
        nameStreet: "Main St",
        houseNumber: 123
       },
       city: "New York",
       country: "USA"
    },
    hobbies: ["reading", "hiking", "cooking"],
    education: {
       degree: "Bachelor's",
       major: "Computer Science"
    }
 };

// Object.assign() поверхностный метод для копирования (1)
const copiedObject = Object.assign({}, simpleObject);


// Spread-синтаксис поверхностного копирования (2)
const personInRF = { name: "Нави", surName: "Винович" };
const userDataInRF = { userName: "S1mple", ...personInRF };


// struturedClone() (3)
// Изменения скопированного объекта не повлияют на родительский объект
const deepStructuredCloneObject = structuredClone(personInUSA); 


// lodash (4)
// Скопированный объект не влияет на родительский
const deepLodash = _.cloneDeep(personInUSA); // Подключить в html <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>


// Глубокое копирование с помощью JSON.parse(JSON.stringify()) (5)
// undefined, функции, symbol становятся null
const deepJSON = JSON.parse(JSON.stringify(personInUSA));


// Глубокое копирование с помощью собственной функции (6)
function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    
    let clone = Array.isArray(obj) ? [] : {}; // Создаем пустой клон, сохраняя структуру полученного obj
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    
    return clone;
  }

const deepCloneObject = deepClone(personInUSA);


// Глубокое копирование с помощью паттерна проектирования прототипа для классов, экземпляры которых нужно копировать. (7)
class Prototype {
    constructor() {
      this.name = "";
      this.age = 0;
      this.address = {
        city: "",
        country: ""
      };
      this.hobbies = [];
    }
    
    clone() {
      const clone = new Prototype();
      clone.name = this.name;
      clone.age = this.age;
      clone.address = deepCopy(this.address);
      clone.hobbies = deepCopy(this.hobbies);
      return clone;
    }
  }
  
  function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    
    let copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    
    return copy;
  }
  
  // Создаем экземпляр прототипа
  const prototypeInstance = new Prototype();
  prototypeInstance.name = "John";
  prototypeInstance.age = 25;
  prototypeInstance.address.city = "New York";
  prototypeInstance.address.country = "USA";
  prototypeInstance.hobbies.push("reading", "music");
  
  // Копируем экземпляр с помощью метода clone()
  const clonedInstance = prototypeInstance.clone();
  
  // Изменяем значения в скопированном объекте
  clonedInstance.name = "Jane";
  clonedInstance.address.city = "San Francisco";
  clonedInstance.hobbies.push("painting");
  
  // Проверяем, что изменения не влияют на исходный объект
  console.log("Экземпляр прототипа:");
  console.log(prototypeInstance); // { name: 'John', age: 25, address: { city: 'New York', country: 'USA' }, hobbies: [ 'reading', 'music' ] }
  console.log("Склонированный прототипным методом clone() объект:");
  console.log(clonedInstance); // { name: 'Jane', age: 25, address: { city: 'San Francisco', country: 'USA' }, hobbies: [ 'reading', 'music', 'painting' ] };



/***** 
TASK 3 – Создать функцию makeCounter всеми описанными и возможными способами;
*****/
// Функция-конструктор (1)
function MakeCounter1(name, age) {
    this.name = name;
    this.age = age;
}
  
const person1 = new MakeCounter1("John", 25);

// Функция-фабрика (2)
function MakeCounter2(name, age) {
    return {
      name: name,
      age: age
    };
}
  
const person2 = MakeCounter2("David", 25);
  
// Функция-конструктор с прототипом (3)
function MakeCounter3(name, age) {
    this.name = name;
    this.age = age;
}
  
MakeCounter3.prototype.sayHello = function() {
    console.log(`Hello! ${this.name}`);
};
  
const person3 = new MakeCounter3("Earl", 25);


// Функция с использованием классов (4)
class MakeCounter4 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    sayHello() {
      console.log(`Hello! ${this.name}`);
    }
}
  
const person4 = new MakeCounter4("Frank", 25);



/***** 
TASK 4 – Прочитать и описать работу глобальной функции structuredClone()
******

Метод `structuredClone()` - это новый встроенный метод в JavaScript для глубокого клонирования объектов. 
Он позволяет создавать копии объектов, включая их вложенные структуры.

Основные задачи, которые может выполнять `structuredClone()`:

- Клонирование бесконечно вложенных объектов и массивов;
- Клонирование циклических ссылок;
- Клонирование различных типов JS, таких, как `Date`, `Error`, `RegExp`, `ArrayBuffer`, `Blob`, `File`, `ImageData` и другие;
- Передача любых [передаваемых объектов](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

Однако есть определенные ограничения:

- Функции не могут быть клонированы и будут генерировать `DataCloneError`;
- DOM-узлы также не могут быть клонированы;
- Дескрипторы свойств, сеттеры и геттеры, а также аналогичные функции, подобные метаданным, не клонируются;
- Прототипы объектов также не клонируются. Если вы планируете клонировать экземпляр определенного класса, 
клонированный объект больше не будет известен как экземпляр этого класса, хотя все действительные свойства этого класса будут клонированы.
*/

/****** 
BONUS 1 – Написать функцию глубокого сравнения двух объектов:
******/
const obj1 = { 
  here: { 
    is: "on", 
    other: "3" 
  },
  object: "Y" 
};

const obj2 = {
  here: { 
    is: "on", 
    other: "2" 
  },
  object: "Y" };

const deepEqual = (obj1, obj2) => {
  if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (let key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    
    return true;
  } else {
    // Если obj1 и obj2 не являются объектами, выполняем обычное сравнение
    return obj1 === obj2;
  }
};

deepEqual(obj1, obj2); // false

/****** 
BONUS 2 – Развернуть строку в обратном направлении при помощи методов массивов:
******/
function solution(str){
  return str.split('').reverse().join('');  
}