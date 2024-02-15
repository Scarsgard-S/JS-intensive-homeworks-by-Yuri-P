/* TASK 1 Написать порядок и вывод в консоли
*/

let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});
 
promiseTwo
 .then((res) => {
    return res + "b"; // Вернет ab
 })
 .then((res) => {
    return res + "с"; // Вернет abc
 })
 .finally((res) => {
    return res + "!!!!!!!"; // Ничего не примет и не передаст дальше, в return будет undefined
 })
 .catch((res) => {
    return res + "d"; // Пропуск метода, прошлое состояние промиса fulfilled
 })
 .then((res) => {
    console.log(res); // Выведет в консоль: abc
 });



/* TASK 2 Написать порядок и вывод в консоли
*/

function doSmth() {
    return Promise.resolve("123"); // Вернёт промис со значение '123'
}
 
doSmth() // Вернет fulfilled промис со значением '123'
 .then(function (a) {
    console.log("1", a); // Выведет в консоль: 1 123
    return a; // Вернет '123'
 })
 .then(function (b) {
    console.log("2", b); // Выведет в консоль: 2 123
    return Promise.reject("321"); // Вернет rejected промис со значением '321'
 })
 .catch(function (err) {
    console.log("3", err); // Выведет в консоль: 3 321
 })
 .then(function (c) {
    console.log("4", c); // Выведет в консоль: 4 undefined // – причина в прошлом rejected состоянии 
 return c;
 });


 
/* TASK 3 Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]
*/

/*
Данный код использует цикл `for` и функцию `setTimeout()` для вывода элементов массива `arr` с задержкой в 3 секунды между каждым выводом.
В каждой итерации цикла вызов `setTimeout()` помещает функцию обратного вызова в веб-апи,
а после истечения задержки функция обратного вызова перемещается из веб-апи в очередь задач.
Когда стек вызовов становится пустым, функция обратного вызова извлекается из очереди задач и выполняется,
выводя значение элемента массива в консоль. Важно отметить, что весь цикл `for` выполняется сразу,
а задержки активируются по мере истечения времени и доступности свободного места в стеке вызовов.
*/
let arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(arr[i]), 3000 * (i + 1));
}

/* TASK 4 Top Level Await (можно ли использовать await вне функции async?)
*/

/*
Top-Level await позволяет использовать ключевое слово await вне асинхронных функций.
Это позволяет упростить написание асинхронного кода,
так как не требуется оборачивать оператор await в немедленно вызываемую асинхронную функцию.
Теперь можно использовать await прямо на верхнем уровне модуля,
что делает возможным ожидание завершения промисов до загрузки модуля.
*/

// (1)
import { fetchData } from './api.js';

const data = await fetchData();
console.log(data);

// (2)
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
