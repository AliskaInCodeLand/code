// console.log('Hello World!');

const arr = [1, 2, 3, 4, 5];
const resultSumElementsArray = arr.reduce((a, b) => a + b);
console.log(resultSumElementsArray);

//Комбинация клавиш для консоли коммитов
//Сtrl + K
//Далее пишем текстовой комментарий
//Нажимаем коммит и push
//И в окне нажимаем push

// {
//     // Преобразование типов? еще раз
//     // Задачи на следующие занятие
//     // Просмотр видео Богдана 2-5 часов
//     // Мутабельные методы массивов?
//     // Практика с методамми массивов
//     // Ознакомится с областью видемости
//     // Решить и прислать код нескольких кат с codewars
// }

// 1. Какие типы данных есть в Javascript?
/**
 * Примитивные типы:
 * string
 * number
 * boolean
 * null
 * undefined
 * bigint
 * symbol
 * Ссылочный тип:
 * Object*/

//2. Что такое undeclared и undefined переменные?
/**
 * undeclared — не объявленные переменные, которых не существует в программе.
 * undefined — объявленные переменные, которым не присвоено значение.
 * */

//3. Что такое null и какие у него проблемы?
/**
 * Мой ответ:
 * null - это тип данных, который обозначает,
 * что переменная пустая и в неё далее в коде с будет записано значение
 *
 * Правильный ответ:
 * null - тип данных, который обозначает отсутствие какого-либо значения.
 * В контексте логических значений рассматривается, как false.
 * typeof null === 'object'
 * объект
 * */

// 4. Что такое глобальные объекты и какие у них проблемы?
/**
 * Глобальные объекты - это переменные, функции, которые доступны
 * в любом месте программы. В браузере это window, в Node.js это global.
 *
 * Проблемы
 * Все глобальные объекты находятся в одном глобальном пространстве имен,
 * из-за чего всегда существует вероятность конфликта имён -
 * когда две части приложения определяют
 * глобальные переменные с одинаковыми именами, но для разных целей.
 * При встраивании стороннего кода также есть вероятность конфликта имён
 *
 * */

// 5. Что вызывает и как происходит явное и неявное приведение к типу String?
/**
 * Преобразование к типу String вызывает:
 *
 * конкатенация - при сложении значения какого-либо типа со строкой,
 * то складываемое значение неявно преобразуется в строку
 * let num = 42;
 * let str = num + '';  // '42'
 *
 * метод toString()
 * Этот метод принадлежит объекту Number.Prototype.
 * Он принимает целое число или число с плавающей запятой
 * и преобразует его в строковый тип.
 * Этот метод принимает единственный необязательный параметр,
 * это целое число от 2 до 36, которое используется для указания
 * основания для представления числовых значений.
 *
 * let num=213;
 * let str = num.toString(8);  // '325'
 *
 * метод toString() - преобразует переданное ему значение в строку
 * Этот метод принимает в качестве параметра число или
 * число с плавающей запятой и преобразует его в символ.
 *
 *Использование шаблонных строк для преобразования числа в строку.
 * let variable name = ' ${value}';
 *
 * */
