// console.log('Hi');

// {
//   /**
//    * // 0.
//    * // input const arrayNumbers = [1,-2, 4, 3]
//    * // output [1, 16, 9] // Задача получить в переменную newArray массив положительных чисел в квадрате*/
//
//   const arrayNumbers = [1, -2, 4, 3];
//
//   let newArray = arrayNumbers
//     .filter((number) => number > 0)
//     .map((number) => number ** 2);
//
//   // for (let i = 0; i < arrayNumbers.length; i++) {
//   //   if (arrayNumbers[i] > 0) {
//   //     newArray.push(arrayNumbers[i] ** 2);
//   //   }
//   // }
//
//   console.log(newArray);
// }

const array = [
  { name: "Jon", age: 20, score: 90 },
  { name: "Max", age: 24, score: 45 },
  { name: "Harry", age: 22, score: 70 },
  { name: "Nike", age: 18, score: 20 },
  { name: "Kate", age: 20, score: 70 },
];

// 1.
// input array
// output ["Jon", "Max", "Harry", "Nike", "Kate"]

// function names(array) {
//   return array.map((element) => element.name);
// }
// console.log(names(array));

// 2.
// input array
// output [
//   { name: "Jon", age: 20, score: 90 },
//   { name: "Max", age: 24, score: 80 },
//   { name: "Harry", age: 22, score: 70 },
//   { name: "Nike", age: 18, score: 20 },
//   { name: "Kate", age: 20, score: 70 },
// ] Задача изменить свойство score с 45 на 80

// function users(array) {
//   array.map((element) => {
//     if (element.name === "Max") {
//       element.score = 80;
//     }
//     return element;
//   });
//   return array;
// }
//
// console.log(users(array));
// console.log(array);

// 3.
// input array
// output [
//  { name: "Max", age: 24, score: 45 },
//  { name: "Nike", age: 18, score: 20 },
// ] Задача вывести в массив объекты у которых score меньше 50

// function users(array) {
//   return array.filter((element) => {
//     if (element.score < 50) {
//       return true;
//     }
//   });
//   // return array;
// }
//
// console.log(users(array));

// 4.
// input (array, callback)
// output [
// { name: "Max", age: 24, score: 45 },
// { name: "Nike", age: 18, score: 20 },
// ] Создать функцию аналога filter которая принимает массив и callback и возвраащает элементы у которых score < 50

// function myFilter(arr, callback) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
//
// console.log(myFilter(array, (el) => el.score > 50));

// 5.
// Вопрос
// Мутабельные методы массивов?

// console.log(array.pop()); //ничего не принимает
// console.log(array.push()); //принимает элементы и возвращает новую длину
// console.log(array.shift()); // для удаления первого элемента
// console.log(array.unshift()); // для добавления первого элемента возвращает длину
// console.log(array.sort()); //
// console.log(array.reverse()); // toReverse
// console.log(array.splice(-1, 0,)); //
// console.log(array.fill()); //заполняет массив элементами

// 6.
// Исправление в коде, ⚠️ НЕ ЗАПУСКАТЬ!
// Написать результат вывода в консоль
// const foo = () => {};
// console.log(typeof typeof {}); //string
// console.log(typeof ""); //string
// console.log(typeof {}); //object
// console.log(typeof []); //object
// console.log(Array.isArray(array)); //
// console.log(typeof foo); // function

// 7.
// Вопрос
// Способы создания массива?
// let arr =[];
// let arr = new Array();
// let arr = Array.from({});
// let arr = Array.of();
// console.log(arr);

// 8.
// Реализовать самописную функцию push которая добавляет элемент в конец массива
// Вопрос перед реализацией, что возвращает метод push?

// function myPush(arr, ...rest) {
//   // debugger;
//   //
//   //   el.forEach((el) => {
//   //     arr[arr.length] = el;
//   //   });
//   //
//   let arr1 = [...arr, ...el];
//   return arr1.length;
// }
//
// console.log(myPush([1, 2, 3], 4, 5, 6, 7));

// 9.
// Реализовать самописную функцию slice которая извлекает индексы массива
// Вопрос перед реализацией, что возвращает метод slice?

// function mySlice(arr, start, end) {
//   let arr1 = [];
//   if (start === undefined || end === undefined) {
//     return arr;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     debugger;
//     if (i >= start && i < end) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }
//
// console.log(mySlice([1, 2, 3, 4, 5], 3, 4));

// 11.
// Задача присвоить валидные значения массива const arr = [33, "Jon"] в переменные age && name

// const [age, name] = [33, "Jon"];
//
// console.log(age, name);

// 14. Реализовать с помощью функции
// input: ["apple", "apple", "apple", "banana", "kiwi", "mango", "banana"]
// output: {apple: 3, banana: 2, kiwi: 1, mango: 1}

function fructs(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    debugger;
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }
  return obj;
}

console.log(
  fructs(["apple", "apple", "apple", "banana", "kiwi", "mango", "banana"]),
);
