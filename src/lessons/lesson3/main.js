// 20
// Вопрос
// Что такое объект?
// 21
// Вопрос
// Какими способами можно создать пустой объект?

// const obj = {};
//
// const t = new Object();
//
// let mystr = "hello";
// let mystr2 = new String("hello2");
// console.log(mystr.toUpperCase());
// console.log(typeof mystr);
// console.log(typeof mystr2);
// console.dir("hi");

// const fs = Object.create({}); //

// 22
// Задача
// 1. создать пустой объект и добавить свойство name: "Max" и age: 20 и сountry: "USA"
// 2. добавить свойство favorite fruits: ["apple", "mango", "kiwi" ]
// 3. вывести в консоль значение свойства favorite fruits
// 4. удалить свойство сountry из объекта

const user = {
  name: "Max",
  age: 20,
  country: "USA",
};

user["favorite fruit"] = ["apple", "mango", "kiwi"];

// console.log(user["favorite fruit"]);
//delete - оператор и возвращает true/false
// console.log(delete user.country);

// 23
// Вопрос
// Что такое метод? - свойство объекта , которое вызывается
// Задача
// Добавить в объект метод который выводит в консоль "Hi"

// user.say = function () {
//   console.log("Hi");
// };

// console.log(user.say());

// 24
// Создать объект и копировать его в переменную
// Поговорить о копиях, какие копии бывают?
// ПОСЛЕ РЕАЛИЗАЦИИ ОБЪЕКТ НЕ КОММЕНТИРОВАТЬ!

// const newuser = user;
// newuser.age = 45;

// console.log(user.age);

// 25
// 2.Реализовать поверхностную копию, cпособы реализации?
// 3.Добавить в объект свойство info : { city: "Minsk", country: "Belarus" }
// 4 Реализовать глубокую копию, способы реализации?

const newuser = { ...user }; //поверхностная копия
user.info = {
  city: "Minsk",
  country: "Belarus",
};

const newuser2 = {};

//for in - с объектом
//поверхностная копия
for (let item in user) {
  newuser2[item] = user[item];
}
// console.log(newuser2);

const newuser3 = Object.assign({}, user); //поверхностная копия

const newuser4 = JSON.parse(JSON.stringify(user)); //глубокая копия

const newuser5 = structuredClone(user); //глубокая копия

// const newuser6 = lodash.clonedip.;//глубокая копия

// newuser5.info.city = "Spb";
// console.log(user);
// console.log(newuser5);

// 26
// Как проверить наличее свойства в объекте выше?

console.log("age" in user); //оператор in, чтобы проверить наличие свойства в объекте

// 27
// Вопрос
// Что такое функция? - блок кода
// Чего позволяет избежать функция?

// 28
// Вопрос
// // Правила работы с функцией? Привести пример в коде с объектом выше!
// let b = 40;
//
// function getName(num) {
//   let b = 100;
//   // console.log(b);
//   return b + 20;
// }
//
// console.log(getName(b));
// console.log(b);

// 29
// Вопрос
// Области видимости?
//глобальная, блочная и функциональная
//область видимости скрипта и область видимости модуля

// {
//   const arr = [1, 2, 3, -20, 60, 40];
//   //императивный - с инструкциями (через цикл)
//   //декларотивный - использование скрытой логики
//   function maxNum(nums) {
//     let count = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] > count) {
//         count = nums[i];
//       }
//     }
//     return count;
//   }
//
//   console.log(maxNum(arr));
// }

//CodeWars
//5-7 часа видео
