// console.log('Hello World!');

// const arr = [1, 2, 3, 4, 5];
// const resultSumElementsArray = arr.reduce((a, b) => a + b);
// console.log(resultSumElementsArray);

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

//6. Что вызывает и как происходит явное и неявное приведение к типу Boolean?
/**
 * Boolean() - метод явного преобразования значения к логическому типу
 *
 * использование логических операторов
 *
 * использование в логических контекстах(лямбда-операторов, конструкций ifelse,)
 * */

// 7. Что вызывает и как происходит явное и неявное приведение к типу Number?
/**
 * Number() - метод явного преобразования
 *Number('5') //5
 *
 * Методы неявного преобразования
 * Использование операторов сравнения <, >, <=, >=,
 * 4 > '5' // 4 > 5
 *
 * Использование побитовых операторов |, &, ^, ~.
 * true | 0 // 1 | 0
 *
 * Арифметические операторы -, +, *, /, %.
 * Оператор + преобразует к числу только в том случае,
 * если в выражении нет строки в качестве операнда
 * 10 - null // 10 - 0
 *
 *Унарный оператор +
 * +'123' //123
 *
 * Оператор нестрогого равенства ==, !=.
 * Оператор == не вызывает неявное преобразование,
 * если оба операнда являются строками.
 * 123 != '456' // 123 != 456
 *
 * parseInt() - преобразует строку в число, если первые символы строки числа
 * const num = '6'
 * const num= str.parseInt();
 *
 * При преобразовании строк в числа система сначала обрезает пробелы,
 * а также символы \n и \t в начале и в конце строки и возвращает NaN,
 * если полученная строка не является действительным числом.
 * Если строка пуста, возвращается 0.
 *
 * Значения типа Symbol не могут быть преобразованы ни явно, ни неявно.
 *
 * При применении оператора == к null или undefined преобразования в число не производится.
 *
 * null == 0       // false
 * undefined == 0  // false
 * Значение NaN не равно ничему, включая себя.
 *
 * */

//Мутабельные методы
// console.log(array.pop()); //ничего не принимает
// console.log(array.push()); //принимает элементы и возвращает новую длину
// console.log(array.shift()); // для удаления первого элемента
// console.log(array.unshift()); // для добавления первого элемента возвращает длину
// console.log(array.sort()); //
// console.log(array.reverse()); // toReverse
// console.log(array.splice(-1, 0,)); //
// console.log(array.fill()); //заполняет массив элементами

//CodeWars
// {
//   /**
//    * Сумма квадратов (n)
//    * Дополните функцию вычисления суммы квадратов так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
//    *
//    * Например, для [1, 2, 2] он должен вернуть 9
//    *  1^2 + 2^2 + 2^2 =9.
//    * */
//   // function squareSum(numbers) {
//   //   return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
//   // }
//   //
//   // console.log(squareSum([1, 2])); //5
//   // console.log(squareSum([0, 3, 4, 5])); //50
//   // console.log(squareSum([])); //0
// }

// {
//   /**
//    * Перевернутые слова
//    * Дополните решение так, чтобы оно переворачивало все слова в переданной строке.
//    *
//    * Слова разделяются ровно одним пробелом, без пробелов в начале или в конце.
//    *
//    * Пример (Ввод --> Вывод):
//    *
//    * "The greatest victory is that which requires no battle"
//    * --> "battle no requires which that is victory greatest The" */
//
//   function reverseWords(str) {
//     const arr = str.split(" ");
//     return str.split(" ").reverse().join(" "); // reverse those words
//   }
//
//   console.log(reverseWords("hello world!")); //"world! hello"
//   console.log(reverseWords("yoda doesn't speak like this")); //"this like speak doesn't yoda"
//   console.log(reverseWords("foobar")); // "foobar"
//   console.log(reverseWords("kata editor")); //"editor kata"
//   console.log(reverseWords("row row row your boat")); //"boat your row row row"
//   console.log(reverseWords("")); //""
// }

// {
//   //Разгром предложения
//   /**
//    * апишите функцию, которая принимает массив слов,
//    * объединяет их в предложение и возвращает это предложение.
//    * Вы можете не обращать внимания на необходимость очистки слов
//    * или добавления знаков препинания, но вы должны добавлять
//    * робелы между словами. Будьте внимательны, в начале или
//    * в конце предложения не должно быть пробелов!
//    *
//    * Пример
//    * ['hello', 'world', 'this', 'is', 'great']  =>
//    * 'hello world this is great'*/
//
//   function smash(words) {
//     return words.join(" ");
//   }
//
//   console.log(smash(["hello", "world"])); //"hello world"
//   console.log(smash(["hello", "amazing", "world"])); //"hello amazing world"
//   console.log(smash(["this", "is", "a", "really", "long", "sentence"])); //this is a really long sentence"
// }

// {
//   //Отфильтровывать гусей
//   /**
//    * Напишите функцию, которая принимает в качестве аргумента
//    * список строк и возвращает отфильтрованный список,
//    * содержащий те же элементы, но без «гусей».
//    *
//    * Гуси — это любые строки из следующего массива,
//    * который предварительно заполнен в вашем решении:
//    * ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//    *
//    * Например, если этот массив был передан в качестве аргумента:
//    * ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//    *
//    * Ваша функция вернет следующий массив:
//    *["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//    *
//    * Элементы в возвращаемом массиве должны быть в том же порядке,
//    * что и в исходном массиве, переданном вашей функции, но без «гусей».
//    * Обратите внимание, что все строки будут в том же регистре,
//    * что и исходные, а некоторые элементы могут повторяться.
//    * */
//
//   function filterOutGeese(birds) {
//     const geeses = [
//       "African",
//       "Roman Tufted",
//       "Toulouse",
//       "Pilgrim",
//       "Steinbacher",
//     ];
//     const res = [];
//     for (let i = 0; i < birds.length; i++) {
//       if (!geeses.includes(birds[i])) {
//         res.push(birds[i]);
//       }
//     }
//     return res;
//   }
//
//   console.log(
//     filterOutGeese([
//       "Mallard",
//       "Hook Bill",
//       "African",
//       "Crested",
//       "Pilgrim",
//       "Toulouse",
//       "Blue Swedish",
//     ]),
//   );
// }
//   //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// }

// {
//   //Новичок - Сокращать, но увеличивать
//   /**
//    * Учитывая непустой массив целых чисел, верните результат
//    * умножения значений по порядку. Пример:
//    *
//    * [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//    * */
//
//   function multiplyNumbers(arr) {
//     debugger;
//     return arr.sort((a, b) => a - b).reduce((acc, curr) => acc * curr, 1);
//   }
//
//   console.log(multiplyNumbers([1, 2, 3])); //6
//   console.log(multiplyNumbers([4, 1, 1, 1, 4])); //16
//   console.log(multiplyNumbers([2, 2, 2, 2, 2, 2])); //64
// }

//практика после 3-его урока
// {
//   const firstUser = {
//     name: "Alice",
//     age: 21,
//     weddings: false,
//   };
//
//   const usersBase = (user, addAt = Date()) =>
//     //     ({
//     //   ...user,
//     //   addAt,
//     // });
//     // {
//     //   const newUser = Object.assign({ addAt }, user);
//     //   return newUser;
//     // };
//
//   console.table(usersBase(firstUser));
// }

// {
//   const fnWithError = () => {
//     throw new Error("AAAAAA");
//   };
//
//   try {
//     fnWithError();
//   } catch (err) {
//     console.error(err);
//     console.error(err.message);
//   }
//
//   console.log("continue");
// }

// Решение задач CodeWars 9/11

// {
//   /**
//    * Суммировать смешанный массив
//    * Учитывая массив целых чисел в виде строк и чисел,
//    * верните сумму значений массива, как если бы все они были числами.
//    * */
//
//   function sumMix(x) {
//     let sum = 0;
//     // for (let i = 0; i < x.length; i++) {
//     //   if (typeof x[i] === "string") {
//     //     sum += parseInt(x[i]);
//     //   } else {
//     //     sum += x[i];
//     //   }
//     // }
//
//     // for (let n of x) {
//     //   sum += parseInt(n);
//     // }
//     // sum = x.map((item) => +item).reduce((s, n) => s + n, 0);
//     // sum = x.map((item) => item).reduce((s, n) => s + +n, 0);
//     return sum;
//   }
//   console.log(sumMix([9, 3, "7", "3"])); //22
//   console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 42
// }

// {
//   //Количество людей в автобусе
//   /**
//    * По городу ездит автобус, который забирает и высаживает людей на каждой остановке.
//    *
//    * Вам предоставлен список (или массив) пар целых чисел. Элементы каждой пары представляют собой количество людей, которые садятся в автобус (первый элемент), и количество людей, которые выходят из автобуса (второй элемент) на автобусной остановке.
//    *
//    * Ваша задача — вернуть количество людей, которые всё ещё находятся в автобусе после последней остановки (после последнего массива). Несмотря на то, что это последняя остановка, автобус может быть не пуст, и некоторые люди всё ещё могут находиться в нём, вероятно, они там спят :D
//    *
//    * Взгляните на тестовые примеры.
//    *
//    * Пожалуйста, имейте в виду, что в тестовых примерах количество людей в автобусе всегда больше или равно 0. Поэтому возвращаемое целое число не может быть отрицательным.
//    *
//    * Второе значение в первой паре в массиве равно 0, так как на первой остановке автобус пуст.
//    */
//
//   const number = function (busStops) {
//     let count = 0;
//     // for (let item of busStops) {
//     //   // for (let it = 0; it < item.length; it++) {
//     //   //   if (it === 0) {
//     //   //     count += item[it];
//     //   //   } else {
//     //   //     count -= item[it];
//     //   //   }
//     //   // }
//     //   //Другой вариант решения
//     //   // count += item[0];
//     //   // count -= item[1];
//     // }
//     //Другой вариант решения
//     // busStops.forEach((stop) => {
//     //   count += stop[0] - stop[1];
//     // });
//     //
//     //Другой вариант решения
//     // count = busStops.reduce((sum, [on, off]) => sum + on - off, 0);
//
//     return count;
//   };
//
//   console.log(
//     number([
//       [10, 0],
//       [3, 5],
//       [5, 8],
//     ]),
//   ); //5
//   console.log(
//     number([
//       [3, 0],
//       [9, 1],
//       [4, 10],
//       [12, 2],
//       [6, 1],
//       [7, 10],
//     ]),
//   ); //17
//   console.log(
//     number([
//       [3, 0],
//       [9, 1],
//       [4, 8],
//       [12, 2],
//       [6, 1],
//       [7, 8],
//     ]),
//   ); //21
//   console.log(number([[0, 0]])); //0
// }

// {
//   //Единицы и нули
//   //
//
//   // function binaryArrayToNumber(arr) {
//   //   debugger;
//   //   let count = 0;
//   //   for (let item = arr.length - 1; item >= 0; item--) {
//   //     let index = arr.length - 1 - item;
//   //     count += arr[index] * 2 ** item;
//   //   }
//   //   return count;
//   // }
//   //Другое решение
//   //   const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
//
//   //Другое решение
//   const binaryArrayToNumber = (arr) => arr.reduce((a, b) => a * 2 + b, 0);
//
//   console.log(binaryArrayToNumber([0, 0, 0, 1])); //1
//   console.log(binaryArrayToNumber([0, 0, 1, 0])); //2
//   console.log(binaryArrayToNumber([1, 1, 1, 1])); //15
//   console.log(binaryArrayToNumber([0, 1, 1, 0])); //6
// }

// {
//   //Сумма нечетных чисел
//   /**
//    * Учитывая треугольник из последовательных нечетных чисел:
//    *
//    *              1
//    *           3     5
//    *        7     9    11
//    *    13    15    17    19
//    * 21    23    25    27    29
//    * ...
//    * Вычислите сумму чисел в n-м ряду этого треугольника (начиная с индекса 1), например: (Ввод —> Вывод)
//    *
//    * 1 -->  1
//    * 2 --> 3 + 5 = 8*/
//
//   function sumOfOddNumbers(row) {
//     let sum = 0;
//     let firstRowNumber = 1;
//     let lastRowNumber = 1;
//     if (row === 1) {
//       sum = 1;
//     }
//     if (row > 1) {
//       for (let x = 1; x <= row - 1; x++) {
//         firstRowNumber += 2 * x;
//       }
//       for (let y = 2; y <= row; y++) {
//         lastRowNumber += 2 * y;
//       }
//       for (let i = firstRowNumber; i <= lastRowNumber; i += 2) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//
//   console.log(sumOfOddNumbers(1)); //1
//   console.log(sumOfOddNumbers(2)); //8
//   console.log(sumOfOddNumbers(3)); //27
//   console.log(sumOfOddNumbers(4)); //64
//   console.log(sumOfOddNumbers(42)); //74088
// }

// {
//   const userProfile = {
//     name: "Gordey",
//     age: 9,
//     clas: "3A",
//   };
//
//   //Деструктуризация параметров функции
//   const getUserInfo = ({ name, age }) => {
//     return `${name} is ${age} years old`;
//   };
//   console.log(getUserInfo(userProfile));
//
//   //Деструктуризация внутри функции
//   // const getUserInfo = (profile) => {
//   //   const { name, clas } = profile;
//   //   return `${name} study in ${clas} class`;
//   // };
//   // console.log(getUserInfo(userProfile));
// }

// // Решение задач CodeWars 10/11
// {
//   //Проверьте результаты экзамена
//   /**
//    * Первый входной массив — это ключ к правильным ответам на экзамене, например ["a", "a", "b", "d"]. Второй массив содержит отправленные студентом ответы.
//    *
//    * Два массива не пусты и имеют одинаковую длину. Верните оценку для этого массива ответов, указав +4 за каждый правильный ответ, -1 за каждый неправильный ответ и +0 за каждый пустой ответ, представленный в виде пустой строки (в C используется пробел).
//    *
//    * Если счет < 0, вернитесь 0.
//    * Например:
//    *
//    *     Correct answer    |    Student's answer   |   Result
//    *  ---------------------|-----------------------|-----------
//    *  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//    *  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//    *  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//    *  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0*/
//
//   function getResultExam(correctAns, studentsAns) {
//     let result = 0;
//     for (let i = 0; i < correctAns.length; i++) {
//       if (correctAns[i] === studentsAns[i]) {
//         result += 4;
//       } else {
//         if (studentsAns[i] === "") {
//           result += 0;
//         } else {
//           result -= 1;
//         }
//       }
//     }
//     if (result < 0) {
//       result = 0;
//       return result;
//     } else {
//       return result;
//     }
//   }
//
//   console.log(getResultExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
//   console.log(getResultExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
//   console.log(getResultExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
//   console.log(getResultExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
// }

// {
//   //Сумма минимумов!
//   /**
//    * Дан двумерный (вложенный) список (массив, вектор и т. д.) размером m * n Ваша задача — найти сумму минимальных значений в каждой строке.
//    *
//    * Например:
//    *
//    * [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//    * , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//    * , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
//    * ]
//    * Таким образом, функция должна возвращать 26, потому что сумма минимумов равна 1 + 5 + 20 = 26.
//    *
//    * Примечание: вам всегда будет предоставляться непустой список, содержащий положительные значения. */
//
//   function sumMin(arr) {
//     let sum = 0;
//     for (let item in arr) {
//       debugger;
//       let min = arr[item][0];
//       for (let j = 0; j < arr[item].length; j++) {
//         if (arr[item][j] < min) {
//           min = arr[item][j];
//         }
//       }
//       sum += min;
//     }
//     return sum;
//   }
//
//   const itArray = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [20, 21, 34, 56, 100],
//   ];
//   console.log(sumMin(itArray)); //22
// }

// {
//   // Простая забава # 176: Обратная буква
//   /**
//    * Задание
//    * Учитывая строку str, переверните ее и опустите все не алфавитные символы.
//    *
//    * Пример
//    * Для str = "krishan" результат должен быть "nahsirk".
//    *
//    * Для str = "ultr53o?n" результат должен быть "nortlu".
//    *
//    * Ввод / Вывод
//    * [input] строка str
//    * Строка состоит из строчных латинских букв, цифр и символов.
//    *
//    * [output] веревка*/
//
//   // function reverseStr(str) {
//   //   // debugger;
//   //   let newstr = str.split("").reverse();
//   //   let regex = /^[a-zA-Z]*$/;
//   //   for (let char = 0; char < newstr.length; char++) {
//   //     if (!regex.test(newstr[char])) {
//   //       delete newstr[char];
//   //     }
//   //   }
//   //   return newstr.join("");
//   // }
//
//   //Другой вариант решения
//   // function reverseStr(str) {
//   //   return str
//   //     .replace(/[^a-z]/gi, "")
//   //     .split("")
//   //     .reverse()
//   //     .join("");
//   // }
//
//   //Другой вариант решения
//   // Метод match возвращает массив
//   // с найденной строкой и null в случае отсутствия
//   // совпадения.
//   //   function reverseStr(str) {
//   //   return str.match(/[a-z]/g).reverse().join("");
//   // }
//
//   //Другой вариант решения
//   // function reverseStr(str) {
//   //   return str
//   //     .split("")
//   //     .reverse()
//   //     .filter((val) => /[a-zA-Z]/.test(val))
//   //     .join("");
//   // }
//
//   console.log(reverseStr("krishan")); //nahsirk
//   console.log(reverseStr("ultr53o?n")); //nortlu
//   console.log(reverseStr("ab23c")); //cba
//   console.log(reverseStr("krish21an")); //nahsirk
//   console.log(reverseStr("doogyw0lt1)o*tryspg(dc_aaorw]( )atqa")); //nahsirk
// }

// {
//   function getTwoOldestAges(arr) {
//     return arr.sort((a, b) => a - b).slice(-2);
//   }
//
//   console.log(getTwoOldestAges([1, 2, 10, 8])); //[8, 10]
//   console.log(getTwoOldestAges([1, 5, 87, 45, 8, 8])); //[45, 87]
//   console.log(getTwoOldestAges([1, 3, 10, 0])); //[3, 10]
// }

// {
//   //Достаточно маленький? - Новичок
//   /**
//    * Вам будут даны array и limit значения. Вы должны проверить, что все значения в массиве меньше или равны предельному значению. Если это так, верните true. В противном случае верните false.
//    *
//    * Можно предположить, что все значения в массиве являются числами. */
//
//   // function smallEnough(arr, lim) {
//   //   return arr.find((item) => {
//   //     return item > lim;
//   //   })
//   //     ? false
//   //     : true;
//   // }
//
//   //Другой вариант решения
//   // function smallEnough(arr, limit) {
//   //   return Math.max(...arr) <= limit;
//   // }
//
//   //Другой вариант решения
//   // function smallEnough(arr, limit) {
//   //   return arr.every((el) => el <= limit);
//   // }
//
//   //Другой вариант решения
//   // function smallEnough(arr, lim) {
//   //   return arr.filter((item) => item > lim).length > 0 ? false : true;
//   // }
//
//   //Другой вариант решения
//   // function smallEnough(arr, limit) {
//   //   return !arr.some((el) => el > limit);
//   // }
//
//   console.log(smallEnough([66, 101], 200)); //true
//   console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); //false
//   console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); //true
//   console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); //true
// }

// // Решение задач CodeWars 11/11
// {
//   // function rounders(value) {
//   //   let count = 1;
//   //   while (value > 10) {
//   //     debugger;
//   //     value = Math.round(value / 10);
//   //     count *= 10;
//   //   }
//   //   return value * count;
//   // }
//
//   //Другое решение
//   // function rounders(value, e = 1) {
//   //   debugger;
//   //   return value < 10 ? value * e : rounders(Math.round(value / 10), e * 10);
//   // }
//
//   //Другое решение
//   // function rounders(value) {
//   //   let power = value.toString().length - 1;
//   //   for (let i = 0; i < power; i++) {
//   //     value = Math.round(value / 10);
//   //   }
//   //   return value * Math.pow(10, power);
//   // }
//
//   console.log(rounders(69358538)); //70 000 000
//   console.log(rounders(1234)); //1000
//   console.log(rounders(1445)); //2000
//   console.log(rounders(14)); //10
// }

// Решение задач CodeWars 12/11
// {
//   //Нечетный или четный?
//   /**Задача:
//    Дан список целых чисел. Определите, является ли сумма его элементов нечётной или чётной.
//
//    Укажите свой ответ в виде строки, соответствующей "odd" или "even".
//
//    Если входной массив пуст, считайте его как: [0] (массив с нулём).
//
//    Примеры:
//    Input: [0]
//    Output: "even"
//
//    Input: [0, 1, 4]
//    Output: "odd"
//
//    Input: [0, -1, -5]
//    Output: "even"*/
//   // function oddOrEven(arr) {
//   //   return arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";
//   // }
//   //
//   // console.log(oddOrEven([0])); //even
//   // console.log(oddOrEven([0, 1, 4])); //odd
//   // console.log(oddOrEven([0, -1, -5])); //even
//   // console.log(oddOrEven([1])); //odd
// }

// {
//   //Тестирование 1-2-3
//   /**Описание:
//    Ваша команда пишет новый модный текстовый редактор, и вам поручили реализовать нумерацию строк.
//
//    Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ней.
//
//    Нумерация начинается с 1. Формат — n: string. Обратите внимание на двоеточие и пробел между ними.
//
//    Примеры: (Ввод --> Вывод)
//
//    [] --> []
//    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/
//
//   // function numiratingStrings(array) {
//   //   let count = 1;
//   //   return array.map(function (el) {
//   //     let newarr = `${count}: ${el}`;
//   //     count++;
//   //     return newarr;
//   //   });
//   // }
//
//   //Другое решение
//   // function numiratingStrings(array) {
//   //   return array.map((item, index) => index + 1 + ": " + item);
//   // }
//
//   console.log(numiratingStrings([])); //[]
//   console.log(numiratingStrings(["a", "b", "c"])); //["1: a", "2: b", "3: c"]
//   console.log(numiratingStrings(["a", "b", "c"])); //["1: a", "2: b", "3: c"]
// }

// {
//   //На сколько ступенек поднимется Suzuki за 20 лет?
//   /**Описание:
//    Судзуки - монах, который поднимается по большой лестнице в монастырь
//    как часть ритуала.
//    В некоторые дни он поднимается по большему количеству ступенек,
//    чем в другие, в зависимости от количества учеников,
//    которых он должен тренировать утром.
//    Ему любопытно, сколько ступенек можно будет преодолеть
//    за следующие 20 лет, и он потратил год на то,
//    чтобы отмечать свой ежедневный прогресс.
//
//    Сумма всех пройденных за год ступеней будет использована
//    для оценки количества ступеней, которые он может преодолеть за 20 лет.
//
//    Прогноз на 20 лет = итого за один год * 20
//
//    Вы получите следующую структуру данных,
//    представляющую количество подъёмов по лестнице,
//    совершённых Сузуки за год. У вас будут все данные за весь год,
//    поэтому независимо от того, как они записаны,
//    задача должна быть простой для решения.
//
//    stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//    Убедитесь, что ваше решение учитывает все вложенные элементы в массиве лестниц.
//
//    Каждый день недели в массиве stairs является массивом.
//
//    sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
//    Ваша функция должна возвращать оценку количества ступеней, пройденных за 20 лет, по приведённой выше формуле.*/
//   function stairsIn20(arr) {
//     return (
//       20 * arr.reduce((acc, cur) => acc + cur.reduce((a, el) => a + el, 0), 0)
//     );
//   }
//   //Другое решение
//   // const stairsIn20 = (s) => s.flat().reduce((p, c) => p + c, 0) * 20;
// }

// {
//   //Тройная проблема
//   /**
//    Создайте функцию, которая будет возвращать строку,
//    объединяющую все буквы трёх введённых строк в группы.
//    Возьмите первую букву из всех введённых строк и расположите
//    их рядом друг с другом.
//    Сделайте это для каждой буквы, см. пример ниже!
//
//    Например, ввод: «aa», «bb», «cc» => вывод: «abcabc»
//
//    Примечание: Вы можете ожидать, что все входные данные будут
//    одинаковой длины.*/
//
//   // function tripleTrouble(one, two, three) {
//   //   let newStrOne = [];
//   //   one.split("");
//   //   two.split("");
//   //   three.split("");
//   //   for (let i = 0; i < one.length; i++) {
//   //     newStrOne.push(one[i]);
//   //     newStrOne.push(two[i]);
//   //     newStrOne.push(three[i]);
//   //   }
//   //   return newStrOne.join("");
//   // }
//   //
//   //Другое решение
//   // function tripleTrouble(one, two, three) {
//   //   let res = [];
//   //   for (let i = 0; i < one.length; i++) {
//   //     res += one[i] + two[i] + three[i];
//   //   }
//   //   return res;
//   // }
//
//   //Другое решение
//   // function tripleTrouble(one, two, three) {
//   //   return one.replace(/./g, (v, i) => v + two[i] + three[i]);
//   // }
//
//   // Другое решение
//   // function tripleTrouble (one, two, three){
//   //     return one.replace(/\w/g, (val, idx) => val + two[idx] + three[idx]);
//   // }
//
//   // Другое решение
//   // function tripleTrouble(one, two, three) {
//   //   return Array.from(one, (x, i) => x + two[i] + three[i]).join("");
//   // }
//
//   console.log(tripleTrouble("aaa", "bbb", "ccc")); //"abcabcabc"
//   console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc")); //"abcabcabcabcabcabc"
//   console.log(tripleTrouble("burn", "reds", "roll")); //"brrueordlnsl"
//   console.log(tripleTrouble("burn", "reds", "roll")); //"brrueordlnsl"
// }

// {
//   //Посчитай обезьян!
//   /**Описание:
//    Вы идёте с сыном в лес, чтобы посмотреть на обезьян.
//    Вы знаете, что их там определённое количество (n),
//    но ваш сын слишком мал, чтобы просто оценить их количество,
//    ему нужно начать считать их с 1.
//
//    Как хороший родитель, вы будете сидеть и
//    считать вместе с ним. Учитывая число (n),
//    заполните массив всеми числами вплоть до этого
//    числа включительно, но без нуля.
//
//    Например (Ввод --> Вывод):
//
//    10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    1 --> [1]*/
//
//   // function monkeyCount(n) {
//   //   let array = [];
//   //   for (let i = 1; i <= n; i++) {
//   //     array.push(i);
//   //   }
//   //   return array;
//   // }
//
//   //Другое решение ??
//   // function monkeyCount(n) {
//   //   return Array.from(Array(n), (_, i) => ++i);
//   // }
//
// //Другое решение ??
// // function monkeyCount(n) {
// //   return [...Array(n).keys()].map((n) => n + 1);
// // }
//
//   console.log(monkeyCount(1)); //[1]
//   console.log(monkeyCount(10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   console.log(monkeyCount(5)); //[1, 2, 3, 4, 5]
// }

// Решение задач CodeWars 13/11
// {
//   // function solution(string) {
//   //   let arr = string.split("");
//   //   let newarr = [];
//   //   for (let i = 0, len = arr.length; i < len; i++) {
//   //     if (arr[i] === arr[i].toUpperCase()) {
//   //       newarr.push(" ");
//   //     }
//   //     newarr.push(arr[i]);
//   //   }
//   //   return newarr.join("");
//   // }
//
//   //Другое решение
//   // function solution(string) {
//   //   return string.replace(/([A-Z])/g, " $1");
//   // }
//
//   //Другое решение
//   // function solution(string) {
//   //   return string
//   //     .split("")
//   //     .map((el) => {
//   //       if (el === el.toUpperCase()) {
//   //         el = " " + el;
//   //       }
//   //       return el;
//   //     })
//   //     .join("");
//   // }
//
//   //Другое решение
//   // function solution(string) {
//   //   return string.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // }
//
//   //Другое решение
//   // const solution = (string) => string.replace(/[A-Z]/g, " $&");
//
//   console.log(solution("camelCasing")); //"camel Casing"
//   console.log(solution("identifier")); //"identifier"
//   console.log(solution("camelCasingTest")); //"camel Casing Test"
// }

// {
//   //Суммируем строки
//   /**Описание:
//    Создайте функцию, которая принимает на вход 2 целых числа
//    в виде строки и выводит сумму (также в виде строки):
//
//    Пример: (Ввод1, Ввод2 --> Вывод)
//
//    "4",  "5" --> "9"
//    "34", "5" --> "39"
//    "", "" --> "0"
//    "2", "" --> "2"
//    "-5", "3" --> "-2"
//    Примечания:
//
//    Если любой из входных данных представляет собой пустую строку,
//    считайте его равным нулю.
//
//    Входные данные и ожидаемый результат никогда не превысят
//    32-битный предел целого числа со знаком (2^31 - 1)*/
//
//   // function sumStr(a, b) {
//   //   return "" + (Number(a) + Number(b));
//   // }
//
//   //Другое решение
//   // function sumStr(a, b) {
//   //   return String(Number(a) + Number(b));
//   // }
//
//   console.log(sumStr("4", "5")); //'9'
//   console.log(sumStr("34", "5")); //'39'
//   console.log(sumStr("-5", "3")); //'-2'
// }

// //Серия для начинающих # 3 Сумма чисел
// {
//   /**
//    * Описание:
//    * Даны два целых числа a и b, которые могут быть положительными или отрицательными. Найдите сумму всех целых чисел между ними, включая их, и верните её. Если два числа равны, верните a или b.
//    *
//    * Примечание: a и b не заказываются!
//    *
//    * Примеры (a, b) --> вывод (объяснение)
//    * (1, 0) --> 1 (1 + 0 = 1)
//    * (1, 2) --> 3 (1 + 2 = 3)
//    * (0, 1) --> 1 (0 + 1 = 1)
//    * (1, 1) --> 1 (1 since both are same)
//    * (-1, 0) --> -1 (-1 + 0 = -1)
//    * (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//    * Ваша функция должна возвращать только число, а не объяснение того, как вы получили это число.
//    * */
//   // function getSum(a, b) {
//   //   let summa = 0;
//   //   if (a < b) {
//   //     for (let i = a; i <= b; i++) {
//   //       summa += i;
//   //     }
//   //   } else {
//   //     for (let i = b; i <= a; i++) {
//   //       summa += i;
//   //     }
//   //   }
//   //   return summa;
//   // }
//
//   //Другое решение
//   /**Сумма всех чисел в арифметической прогрессии:
//    * (n / 2) * (первое + последнее)
//    * «n» — количество чисел в прогрессии.
//    * Итого:
//    * сумма = ((последнее — первое + 1) / 2) * (первое + последнее)*/
//   // function getSum(a, b) {
//   //   let min = Math.min(a, b);
//   //   let max = Math.max(a, b);
//   //   return ((max - min + 1) / 2) * (max + min);
//   // }
//
//   console.log(getSum(0, -1)); //-1
//   console.log(getSum(0, 1)); //1
//   console.log(getSum(2, 2)); //2
// }

// {
//   //Сортировка нечетных
//   /**
//    * Вам будет предоставлен массив чисел.
//    * Вам нужно отсортировать нечётные числа в порядке возрастания,
//    * оставив чётные числа на своих местах.
//    *
//    * Примеры
//    * [7, 1]  =>  [1, 7]
//    * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//    * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
//    * =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */
//
//   // function sortArray(arr) {
//   //   let arrEven = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] % 2 !== 0) {
//   //       arrEven.push(arr[i]);
//   //       arr[i] = null;
//   //     }
//   //   }
//   //   if (arrEven.length > 0) {
//   //     arrEven.sort((a, b) => a - b);
//   //     let item = 0;
//   //     for (let j = 0; j < arr.length; j++) {
//   //       if (arr[j] === null) {
//   //         arr[j] = arrEven[item];
//   //         item++;
//   //       }
//   //     }
//   //   }
//   //   return arr;
//   // }
//
//   //Другое решение
//   // function sortArray(array) {
//   //   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   //   return array.map((x) => (x % 2 ? odd.shift() : x));
//   // }
//
//   console.log(sortArray([5, 8, 6, 3, 4])); //[3, 8, 6, 5, 4]
//   // console.log(sortArray([7, 1])); //[1, 7]
//   // console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//   // console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
//   // console.log(sortArray([])); //[]
// }

// {
//   //Построить башню
//   /**
//    * Построить башню
//    * Постройте башню в форме пирамиды в виде массива/списка строк,
//    * заданного положительным целым числом number of floors.
//    * Блок башни обозначается символом "*".
//    *
//    * Например, башня с 3 этажами выглядит следующим образом:
//    * [
//    *   "  *  ",
//    *   " *** ",
//    *   "*****"
//    * ]
//    *
//    * И башня с 6 этажами выглядит следующим образом:
//    *
//    * [
//    *   "     *     ",
//    *   "    ***    ",
//    *   "   *****   ",
//    *   "  *******  ",
//    *   " ********* ",
//    *   "***********"
//    * ]
//    * */
//
// //   function buildTower(floors) {
// //     const arr = [];
// //     let count = 1 + (floors - 1) * 2;
// //     const size = count;
// //     const str = [];
// //     while (count > 0) {
// //       let i = count;
// //       while (i > 0) {
// //         // if (i % 2 !== 0) {
// //         str.push("*");
// //         // }
// //         i--;
// //       }
// //       if (str.length % 2 !== 0) {
// //         if (str.length < size) {
// //           while (str.length < size) {
// //             str.push("");
// //             str.unshift("");
// //           }
// //         }
// //         arr.push(str.join(""));
// //       }
// //       str.splice(0, count);
// //       count--;
// //     }
// //     return arr.reverse();
// //   }
// //
// //   console.log(buildTower(3));
// // }

// Решение задач CodeWars 14/11
// {
//   // Заставьте мертвую рыбу плавать
//   /**
//    * Создайте синтаксический анализатор для интерпретации и выполнения языка Deadfish.
//    *
//    * Deadfish работает с одним значением в памяти, которое изначально равно 0.
//    *
//    * Он использует четыре односимвольные команды:
//    *
//    * i: Увеличить значение
//    * d: Уменьшаем значение
//    * s: Возведение значения в квадрат
//    * o: Вывод значения в результирующий массив
//    * Все остальные инструкции не являются операторскими и не имеют никакого эффекта.
//    *
//    * Примеры
//    * Программа "iiisdoso" должна возвращать числа [8, 64].
//    * Программа "iiisdosodddddiso" должна возвращать числа [8, 64, 3600].*/
//
//   function Deadfish(str) {
//     let num = 0;
//     let arr = [];
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === "i") {
//         num++;
//       }
//       if (data[i] === "d") {
//         num--;
//       }
//       if (data[i] === "s") {
//         num = num ** 2;
//       }
//       if (data[i] === "o") {
//         arr.push(num);
//       }
//     }
//     return arr;

//   }
//
//   console.log(Deadfish("iiisdoso")); //[8, 64]
//   console.log(Deadfish("iiisdosodddddiso")); //[8, 64, 3600]
// }

// {
//   //Помогите книготорговцу !
//   /**
//    * Задача
//    * Вы получите список товаров в книжном магазине и список категорий. Ваша задача — найти общее количество книг в списке товаров в книжном магазине по кодам категорий из списка категорий. Примечание: коды в обоих списках расположены в одном и том же порядке.
//    *
//    * Верните результат в виде строки, описанной в примере ниже, или в виде списка пар (Haskell/Clojure/Racket/Prolog).
//    *
//    * Если какой-либо из входных списков пуст, верните пустую строку или пустой массив/список (Clojure/Racket/Prolog).
//    *
//    * Пример
//    * # the bookseller's stocklist:
//    * "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"
//    *
//    * # list of categories:
//    * "A", "B", "C", "W"
//    *
//    * # result:
//    * "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
//    * Объяснение:
//    *
//    * категория A: 20 книг (ABART)
//    * категория B: 114 книг = 25 (BKWRK) + 89 (BTSQZ)
//    * категория C: 50 книг (CDXEF)
//    * категория W: 0 книг */
//
//   function counterBook(stocklist, categories) {
//     let arr = [];
//     let its = false;
//     for (let i = 0; i < stocklist.length; i++) {
//       let str = stocklist[i].split(" ");
//       for (let j = 0; j < categories.length; j++) {
//         let newarr = [];
//         if (str[0][0] === categories[j]) {
//           arr.push(str[0][0], str[1]);
//         }
//       }
//     }
//     for (let j = 0; j < arr.length; j++) {
//       let char = arr[j][0];
//       if (arr.filter((item) => item === -1)) {
//       }
//     }
//     return arr;
//   }
//
//   console.log(
//     counterBook(
//       ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
//       ["A", "B", "C", "W"],
//     ),
//   );
// }

// Решение задач CodeWars 15/11
// {
//   //Сумма без наибольшего и наименьшего числа
//   /**
//    * Задание
//    * Сложите все числа заданного массива (см. список),
//    * кроме самого большого и самого маленького элементов
//    * (по значению, а не по индексу!).
//    *
//    * Самый высокий или самый низкий элемент соответственно
//    * — это один элемент на каждом краю, даже если их несколько с
//    * одинаковым значением.
//    *
//    * Следите за проверкой входных данных.
//    *
//    * Пример
//    * { 6, 2, 1, 8, 10 } => 16
//    * { 1, 1, 11, 2, 3 } => 6
//    * Проверка входных данных
//    * Если вместо массива указано пустое значение
//    * ( null, None, Nothing, nil и т. д.) или если указанный массив
//    * является пустым списком или списком, содержащим только элемент 1,
//    * верните 0. */
//
//   // function sumArray(array) {
//   //   if (Array.isArray(array)) {
//   //     if (array.length > 1) {
//   //       array.sort(function (a, b) {
//   //         return a - b;
//   //       });
//   //       array.splice(0, 1);
//   //       array.splice(-1, 1);
//   //       let num = array.reduce((acc, cur) => acc + cur, 0);
//   //       return num;
//   //     } else {
//   //       return 0;
//   //     }
//   //   } else {
//   //     return 0;
//   //   }
//   // }
//
//   //Другое решение
//   // const sumArray = (numbers) =>
//   //   numbers && numbers.length > 1
//   //     ? numbers
//   //         .sort((a, b) => a - b)
//   //         .slice(1, -1)
//   //         .reduce((sum, number) => sum + number, 0)
//   //     : 0;
//
//   //Другое решение
//   // function sumArray(array) {
//   //   return !array || array.length < 4
//   //     ? 0
//   //     : array
//   //         .sort((a, b) => a - b)
//   //         .slice(1, array.length - 1)
//   //         .reduce((a, b) => a + b);
//   // }
//
//   //Другое решение
//   // function sumArray(array) {
//   //   return Array.isArray(array) && array.length > 1
//   //     ? array.reduce((s, n) => s + n, 0) -
//   //         Math.min(...array) -
//   //         Math.max(...array)
//   //     : 0;
//   // }
//
//   //Другое решение
//   function sumArray(array) {
//     array = array || [];
//     return array
//       .sort((a, b) => a - b)
//       .slice(1, -1)
//       .reduce((a, b) => a + b, 0);
//   }
//
//   console.log(sumArray([6, 2, 1, 8, 10])); //16
//   console.log(sumArray([1, 1, 11, 2, 3])); //6
//   console.log(sumArray([1])); //0
//   console.log(sumArray(null)); //0
// }

// {
//   function counterBook(stocklist, categories) {
//     if (!stocklist.length || categories.length) {
//       return 0;
//     }
//     const categoryCounts = {};
//     for (let item = 0; item <stocklist.lengthstocklist) {
//       let arr = item.split(" ");
//       console.log(arr);
//       // if (categories.includes(arr[0])) {
//       //   categoryCounts[arr[0]] =
//       //     (categoryCounts[arr[0]] || 0) + parseInt(count);
//       //   console.log(categoryCounts[arr[0]]);
//       // }
//       // }
//
//       // let result = [];
//       // for (let category of categories) {
//       //   result.push(`${category} : ${categoryCounts[category]}`);
//       // }
//       // return result.join("-");
//     }
//   }
//
//   console.log(
//     counterBook(
//       ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
//       ["A", "B", "C", "W"],
//     ),
//   );
// }

//Решение задач CodeWars 16/11
// {
//   /**
//    * Описание:
//    * В начале года в маленьком городке проживало p0 = 1000 человек.
//    * Население регулярно увеличивается на 2 percent человек в год,
//    * и, кроме того, 50 новых жителей в год приезжают в город.
//    * Сколько лет потребуется городку, чтобы его население превысило
//    * или стало равным p = 1200 жителям?
//    *
//    * At the end of the first year there will be:
//    * 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//    *
//    * At the end of the 2nd year there will be:
//    * 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
//    *
//    * At the end of the 3rd year there will be:
//    * 1141 + 1141 * 0.02 + 50 => 1213
//    *
//    * It will need 3 entire years.
//    * Более общие параметры:
//    *
//    * p0, percent, aug (inhabitants coming or leaving each year),
//    * p (population to equal or surpass)
//    *
//    * функция nb_year должна возвращать n количество полных лет,
//    * необходимых для того, чтобы численность населения стала больше
//    * или равна p.
//    *
//    * aug - целое число, percent - положительное или нулевое плавающее
//    * число, p0 и p - положительные целые числа (> 0)
//    *
//    * Examples:
//    * nb_year(1500, 5, 100, 5000) -> 15
//    * nb_year(1500000, 2.5, 10000, 2000000) -> 10
//    * Примечание:
//    * Не забудьте преобразовать параметр «процент» в
//    * процентах в теле вашей функции: если параметр «процент» равен 2,
//    * вам нужно преобразовать его в 0,02.
//    *
//    * Доли людей не учитываются. В конце каждого года численность
//    * населения округляется до целого числа: 252.8 человек
//    * округляются до 252 человек.*/
//
//   function nb_year(p0, percent, aug, p) {
//     let people = p0;
//     let year = 0;
//     while (people <= p) {
//       people += people * (percent / 100) + aug;
//       console.log(people);
//       people = Math.floor(people);
//       console.log(people);
//       year++;
//     }
//     return year;
//   }
//   0;
//   console.log(nb_year(1500, 5, 100, 5000)); //15
//   console.log(nb_year(1500000, 2.5, 10000, 2000000)); //10
//   console.log(nb_year(1500000, 0.25, 1000, 2000000)); //94
//   console.log(nb_year(1000, 2.0, 50, 1214)); //4
//   94; //
// }

// {
//   /**Можете ли вы реализовать функцию,
//  которая будет возвращать количество слов в строке?
//
// Вы должны убедиться, что пробелы в строке действительно
// являются пробелами.*/
//
//   // function countWords(str) {
//   //   let arr = str.split(" ");
//   //   for (let char = 0; char < arr.length; char++) {
//   //     // debugger;
//   //     if (arr[char] == "") {
//   //       arr.splice(char, 1);
//   //     }
//   //   }
//   //   return arr.length;
//   // }
//
//   //https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
//
//   function countWords(str) {
//     return str.split(" ").filter((word) => word).length;
//   }
//
//   console.log(countWords("Hello")); //1
//   console.log(countWords(" Hello World! ")); //2
//   console.log(countWords("No results for search term `s`")); //6
//   console.log(countWords(" Hello")); //1
// }

// {
//   //Это письмо?
//   /**
//    * Напишите функцию isItLetter или is_it_letter или IsItLetter,
//    * которая сообщает нам, является ли заданный
//    * символ буквой или нет. */
//
//   // function isItLet(char) {
//   //   const regex = /^[a-zA-Z]+$/;
//   //   return regex.test(char);
//   // }
//
//   console.log(isItLet("a")); //true
//   console.log(isItLet("IsItLetter")); //true
//   console.log(isItLet("is_it_letter")); //false
//   console.log(isItLet("1")); //false
// }

// {
//   //Бормотание
//   /**
//    * Описание:
//    * На этот раз никакой истории, никакой теории. Приведённые ниже примеры показывают, как написать функцию accum:
//    *
//    * Примеры:
//    * accum("abcd") -> "A-Bb-Ccc-Dddd"
//    * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//    * accum("cwAt") -> "C-Ww-Aaa-Tttt"
//    * Параметр accum — это строка,
//    * которая содержит только буквы a..z и A..Z.*/
//
//   // function accum(s) {
//   //   s = s.split("");
//   //   let newstr = "";
//   //   for (let i = 0; i < s.length; i++) {
//   //     debugger;
//   //     let count = i + 1;
//   //     newstr += s[i].toUpperCase();
//   //     while (count > 1) {
//   //       newstr += s[i].toLowerCase();
//   //       count--;
//   //     }
//   //     if (i !== s.length - 1) newstr += "-";
//   //   }
//   //   return newstr;
//   // }
//
//   //Другое решение
//   // function accum(s) {
//   //   return s
//   //     .split("")
//   //     .map((char, i) => {
//   //       return char.toUpperCase() + char.toLowerCase().repeat(i);
//   //     })
//   //     .join("-");
//   // }
//
//   //Другое решение
//   function accum(s) {
//     return [...s]
//       .map((el, i) => {
//         return el.toUpperCase() + el.toLowerCase().repeat(i);
//       })
//       .join("-");
//   }
//
//   console.log(accum("abcd")); //"A-Bb-Ccc-Dddd"
//   console.log(accum("RqaEzty")); //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//   console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"
// }

//Решение задач CodeWars 17/11
// {
/**
   noobCode 03: ПРОВЕРЬТЕ ЭТИ БУКВЫ... посмотрите,
   есть ли буквы из «Строки 2» в «Строке 1»*/
/**
 * Напишите функцию, которая проверяет, присутствуют ли все буквы из второй строки в первой хотя бы один раз, независимо от того, сколько раз они встречаются:
 *
 * ["ab", "aaa"]    =>  true
 * ["trances", "nectar"]    =>  true
 * ["compadres", "DRAPES"]  =>  true
 * ["parses", "parsecs"]    =>  false
 * Функция не должна учитывать регистр, как показано в примере № 2.
 * Примечание: обе строки представлены в виде одного аргумента в форме
 * массива. */

// function checkLetters(arr) {
//   let str1 = arr[0].toLowerCase().split("");
//   let str2 = arr[1].toLowerCase().split("");
//   let res = [];
//   for (let i = 0; i < str2.length; i++) {
//     if (str1.includes(str2[i]) || str1.includes(str2[i])) {
//       res.push(1);
//     } else {
//       res.push(0);
//     }
//   }
//   if (res.includes(0)) {
//     return false;
//   }
//   return true;
// }

//Другое решение
// function checkLetters(arr) {
//   return [...arr[1].toLowerCase()].every((x) =>
//     arr[0].toLowerCase().includes(x),
//   );
// }

//Другое решение
// function letterCheck(arr) {
//   for (let i = 0; i < arr[1].length; i++) {
//     if (arr[0].toLowerCase().includes(arr[1][i])) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

//Другое решение
// function checkLetters(arr) {
//   const arr1 = arr[0].toLowerCase().split("").sort();
//   const arr2 = arr[1].toLowerCase().split("").sort();
//   return arr2.every((e) => arr1.includes(e)) ? true : false;
// }

//Другое решение
//   function checkLetters(arr) {
//     let lowercased = arr.map((word) => word.toLowerCase());
//
//     var str1 = lowercased[0];
//     var str2 = lowercased[1];
//     var newString = "";
//
//     for (i = 0; i < str2.length; i++) {
//       newString = str1.replace(str2[i], "");
//       if (newString === str1) {
//         return false;
//       }
//       str1 = newString;
//     }
//     return true;
//   }
//
//   console.log(checkLetters(["ab", "aaa"])); //true
//   console.log(checkLetters(["trances", "nectar"])); //true
//   console.log(checkLetters(["compadres", "DRAPES"])); //true
//   console.log(checkLetters(["THE EYES", "they see"])); //true
//   console.log(checkLetters(["parses", "parsecs"])); //false
// }

//Решение задач CodeWars 18/11
// {
//   //Метод camelCase
//   /**
//    * Описание:
//    * Напишите метод (или функцию, в зависимости от языка), который преобразует строку в верблюжий регистр, то есть все слова должны начинаться с заглавной буквы, а пробелы должны быть удалены.
//    *
//    * Примеры (ввод -> вывод):
//    * "hello case" --> "HelloCase"
//    * "camel case word" --> "CamelCaseWord"
//    * Не забудьте оценить это ката! Спасибо :)
//    * */
//
//   function camelCase(str) {
//     let arr = str.split(" ");
//     let newstr = "";
//     for (let i = 0; i < arr.length; i++) {
//       newstr += arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
//     }
//     return newstr;
//   }
//
//   console.log(camelCase("hello case")); //"HelloCase"
//   console.log(camelCase("camel case word")); //"CamelCaseWord"
// }

// {
//Map и Set
// let map = new Map();
//
// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ
//
// // объект Object приводит ключи к строкам
// // Map сохраняет тип ключей, так что сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
//
// console.log(map.size); // 3
// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук", 50],
// ]);
//
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец, помидор, лук
// }
//
// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }
//
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//   // то же самое, что и recipeMap.entries()
//   console.log(entry); // огурец,500 (и так далее)
// }
// массив (или другой итерируемый объект) с парами ключ-значение для инициализации
// let map = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);
//
// console.log(map.get("1")); // str1
//Set
// let set = new Set();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
//
// // set хранит только 3 уникальных значения
// console.log(set.size); // 3
//
// for (let user of set) {
//   console.log(user.name); // John (потом Pete и Mary)
// }
// }

//Теория с учебника JSlearn 19/11
// {
//   let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50],
//   ]);

// for (let vegetable of recipeMap.entries()) {
//   console.log(vegetable); // огурец, помидор, лук
// }

// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`); // огурец: 500 и так далее
// });

// let base = new Map([
//   ["Bob", "USA"],
//   ["Alice", "Russia"],
// ]);
//
// let obj = { Bob: "USA" };
// console.log(base.get("Alice"));
// let objMap = new Map(Object.entries(obj));
// console.log(objMap.get("Bob"));
//
// let prices = Object.fromEntries([
//   ["banana", 1],
//   ["orange", 2],
//   ["meat", 4],
// ]);
//
// console.log(prices);
// console.log(Object.fromEntries(base));
//
// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 4);
//
// let fruits = Object.fromEntries(map);
// console.log(fruits);
// }

// {
//   // let set = new Set();
//   //
//   // let user1 = { name: "Ludmila", age: 35 };
//   // let user2 = { name: "Anton", age: 36 };
//   // let user3 = { name: "Anfisa", age: 18 };
//   //
//   // set.add(user1);
//   // set.add(user2);
//   // set.add(user3);
//   // set.add(user1);
//   // set.add(user2);
//   //
//   // console.log(set.size);
//   //
//   // for (let el of set) {
//   //   console.log(el.name);
//   // }
//
//   let set = new Set(["Math", "History", "Music"]);
//   console.log(set);
//   set.forEach((value, valueAgain, set) => console.log(value));
//   console.log(set.values());
//   console.log(set.keys());
//   console.log(set.entries());
// }

//Задачи из учебника
// {
//   /**
//    * Допустим, у нас есть массив arr.
//    *
//    * Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
//    *
//    * Например:
//    * */
//   // function unique(arr) {
//   //   /* ваш код */
//   // }
//   //
//   // let values = ["Hare", "Krishna", "Hare", "Krishna",
//   //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   // ];
//   //
//   // alert( unique(values) ); // Hare,Krishna,:-O
//
//   function unique(arr) {
//     return Array.from(new Set(arr));
//   }
//
//   let values = [
//     "Hare",
//     "Krishna",
//     "Hare",
//     "Krishna",
//     "Krishna",
//     "Krishna",
//     "Hare",
//     "Hare",
//     ":-O",
//   ];
//
//   console.log(unique(values)); //Hare,Krishna,
// }

// {
//   //Отфильтруйте анаграммы
//   /**Анаграммы – это слова, у которых те же буквы
//    * в том же количестве, но они располагаются в другом порядке. Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//    *
//    * Например:
//    *
//    * nap - pan
//    * ear - are - era
//    * cheaters - hectares - teachers
//    * Напишите функцию aclean(arr), которая возвращает массив слов,
//    * очищенный от анаграмм.
//    *
//    * Например:
//    *
//    * let arr = ["nap", "teachers", "cheaters", "PAN",
//    * "ear", "era", "hectares"];
//    *
//    * alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
//    * Из каждой группы анаграмм должно остаться только одно слово,
//    * не важно какое.*/
//
//   function aclean(arr) {
//     // let word = new Map();
//     // for (let item of arr) {
//     //   let sorted = item.toLowerCase().split("").sort().join("");
//     //
//     //   // console.log(sorted);
//     //   word.set(sorted, item);
//     //   // console.log(word);
//     // }
//     // return console.log(word.values());
//
//     let obj = {};
//     //можно так
//     // arr.forEach((str, index) => {
//     //   obj[str.toLowerCase().split("").sort().join("")] = str;
//     // });
//
//     for (let str = 0; str < arr.length; str++) {
//       let template = arr[str].toLowerCase().split("").sort().join("");
//       obj[template] = arr[str];
//     }
//
//     return Object.values(obj);
//   }
//   console.log(
//     aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]),
//   );
//   // "nap,teachers,ear" или "PAN,cheaters,era"
// }

// {
//   //Перебираемые ключи
//   //   Мы хотели бы получить массив ключей map.keys() в переменную
//   //   и далее работать с ними, например, применить метод .push.
//   //     Но это не выходит:
//   //
//   //   let map = new Map();
//   //   map.set("name", "John");
//   //   let keys = map.keys();
//   //
//   // // Error: keys.push is not a function
//   // // Ошибка: keys.push -- это не функция
//   //   keys.push("more");
//   //   Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
//
//   // let map = new Map();
//   // map.set("name", "John");
//   // let keys = Array.from(map.keys());
//   // keys.push("more");
//   // console.log(keys);
// }

//Решение задач  20/11
// {
//   //Прыгающие мячи
//   /**
//    * Описание:
//    * Ребёнок играет с мячом на n-м этаже высокого здания.
//    * Высота этого этажа над уровнем земли h известна.
//    *
//    * Он выбрасывает мяч из окна. Мяч отскакивает (например)
//    * на две трети своей высоты (коэффициент отскока 0,66).
//    *
//    * Его мать смотрит из окна на землю с высоты 1,5 метра.
//    *
//    * Сколько раз мать увидит, как мяч пролетает мимо её окна
//    * (включая моменты, когда он падает и отскакивает)?
//    *
//    * Для корректного эксперимента должны быть выполнены три условия:
//    * Значение параметра «h» в метрах должно быть больше 0
//    * Числовой параметр «отскок» должен быть больше 0 и меньше 1
//    * Плавающий параметр "window" должен быть меньше h.
//    * Если выполнены все три приведённых выше условия, верните
//    * положительное целое число, в противном случае верните -1.
//    *
//    * Примечание:
//    * Мяч можно увидеть только в том случае, если высота
//    * отскочившего мяча строго больше, чем параметр окна.
//    *
//    * Примеры:
//    * - h = 3, bounce = 0.66, window = 1.5, result is 3
//    *
//    * - h = 3, bounce = 1, window = 1.5, result is -1
//    *
//    * (Condition 2) not fulfilled).*/
//
//   function bouncingBall(h, bounce, window) {
//     // console.log(h, bounce, window);
//     let count = 0;
//     if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//       while (h > window) {
//         h = h * bounce;
//         count++;
//       }
//       return count * 2 - 1;
//     }
//     count = -1;
//     return count;
//   }
//
//   console.log(bouncingBall(3.0, 0.66, 1.5)); //3
//
//   console.log(bouncingBall(30.0, 0.66, 1.5)); //15
//
//   console.log(bouncingBall(3.0, 1.0, 1.5)); //-1
// }

// {
//   //zipWith
//   /**
//    * Задача
//    * zipWith ( или zip_with ) принимает функцию и два массива
//    * и объединяет их, применяя функцию к каждой паре значений.
//    * Результатом функции является новый массив.
//    *
//    * Если массивы имеют разную длину, на выходе будет только
//    * более короткий массив.
//    * (Значения более длинного массива просто не используются.)
//    *
//    * Входные данные изменять не следует.
//    *
//    * Примеры
//    * zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
//    * zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
//    *
//    * zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
//    * zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions*/
//
//   // function zipWith(fn, a0, a1) {
//   //   let newarr = [];
//   //   for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
//   //     newarr.push(fn(a0[i], a1[i]));
//   //   }
//   //   return newarr;
//   // }
//
//   function zipWith(f, A = [], B = []) {
//     var smaller = B.length > A.length ? A : B;
//     return smaller.map((v, i, RA) => f(A[i], B[i]));
//   }
//
//   console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); //, [1,10,100,1000]
//   console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])); //, [4,7,7,4,7,7]
//   console.log(
//     zipWith(
//       function (a, b) {
//         return a + b;
//       },
//       [0, 1, 2, 3],
//       [0, 1, 2, 3],
//     ),
//   ); //, [0,2,4,6]
//   console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])); //, [0,2,4,6]
// }

// {
//   //Moving Zeros To The End
//   /**
//    * Описание:
//    * Напишите алгоритм, который принимает массив и перемещает
//    * все нули в конец, сохраняя порядок остальных элементов.
//    *
//    * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/
//
//   // function moveZeros(arr) {
//   //   let newArr = arr.filter((item) => item !== 0);
//   //   while (newArr.length < arr.length) {
//   //     newArr.push(0);
//   //   }
//   //   return newArr;
//   // }
//
//   var moveZeros = function (arr) {
//     return arr
//       .filter(function (x) {
//         return x !== 0;
//       })
//       .concat(
//         arr.filter(function (x) {
//           return x === 0;
//         }),
//       );
//   };
//
//   console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// }

// {
//   //Количество гласных
//   /**
//    * Описание:
//    * Возвращает количество гласных в заданной строке.
//    *
//    * В этой ката мы будем считать гласные a, e, i, o, u (но не y).
//    *
//    * Входная строка будет состоять только из строчных букв и / или пробелов. */
//
//   function getCount(str) {
//     return str.split("").filter((item) => "aeiou".includes(item)).length;
//   }
//   console.log(getCount("abracadabra")); //5
// }

// //Решение задач CodeWars 21/11
// // {
// //   //Транспонирование матриц
// //   /**
// //    * Напишите функцию, которая выводит транспонированную матрицу
// //    * — новую матрицу, в которой столбцы и строки исходной матрицы
// //    * поменяны местами.
// //    *
// //    * Например, транспонирование:
// //    *
// //    * | 1 2 3 |
// //    * | 4 5 6 |
// //    * это
// //    *
// //    * | 1 4 |
// //    * | 2 5 |
// //    * | 3 6 |
// //    * Входными данными для вашей функции будет массив строк матрицы.
// //    * Вы можете предположить, что каждая строка имеет одинаковую длину,
// //    * а высота и ширина матрицы положительны. */
// //
// //   function transpose(matrix) {
// //     let matrixLength = matrix.length;
// //
// //     let itemLength = matrix[0].length;
// //     let result = [];
// //     for (let i = 0; i < itemLength; i++) {
// //       let newitem = [];
// //       for (let j = 0; j < matrixLength; j++) {
// //         let newestItem = matrix[j][i];
// //
// //         newitem.push(newestItem);
// //       }
// //       result.push(newitem);
// //     }
// //     return result;
// //   }
//
//   console.log(transpose([[1]])); //[[1]]
//   console.log(transpose([[1, 2, 3]])); //[ [ 1 ], [ 2 ], [ 3 ] ]
//   console.log(
//     transpose([
//       [1, 2, 3],
//       [4, 5, 6],
//     ]),
//   ); // [[1,4],[2,5],[3,6]]
// }

// {
//   //Take a Ten Minutes Walk
//   /**Вы живёте в городе Картезия, где все дороги проложены в виде идеальной сетки.
//    * Вы пришли на встречу на десять минут раньше, поэтому решили воспользоваться
//    * возможностью и немного прогуляться. Город предоставляет своим жителям приложение
//    * для прогулок на телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет
//    * вам набор однобуквенных строк, обозначающих направление движения (например,
//    * ['n', 's', 'w', 'e']). Вы всегда проходите только один квартал для каждой
//    * буквы (направления) и знаете, что вам требуется одна минута, чтобы пройти
//    * один квартал, поэтому создайте функцию, которая будет возвращать true,
//    * если путь, который вам предлагает приложение, займёт ровно десять минут
//    * (вы же не хотите прийти раньше или опоздать!) и, конечно, вернёт вас в исходную точку.
//    * В противном случае верните false.
//
//    Примечание: вы всегда будете получать допустимый массив, содержащий случайный
//    набор букв направления («n», «s», «e» или «w» только). Вы никогда не получите
//    пустой массив (это не прогулка, это стояние на месте!).*/
//
//   // const isValidWalk = (walk) =>
//   //   walk.length == 10 &&
//   //   !walk.reduce((prev, curr) => prev + { n: 1, e: 2, s: -1, w: -2 }[curr], 0);
//
//   // function isValidWalk(walk) {
//   //   var dx = 0;
//   //   var dy = 0;
//   //   var dt = walk.length;
//   //
//   //   for (var i = 0; i < walk.length; i++) {
//   //     switch (walk[i]) {
//   //       case "n":
//   //         dy--;
//   //         break;
//   //       case "s":
//   //         dy++;
//   //         break;
//   //       case "w":
//   //         dx--;
//   //         break;
//   //       case "e":
//   //         dx++;
//   //         break;
//   //     }
//   //   }
//   //
//   //   return dt === 10 && dx === 0 && dy === 0;
//   // }
//
//   // function isValidWalk(walk) {
//   //   function count(val) {
//   //     return walk.filter(function (a) {
//   //       return a == val;
//   //     }).length;
//   //   }
//   //   return (
//   //     walk.length == 10 && count("n") == count("s") && count("w") == count("e")
//   //   );
//   // }
//
//   function isValidWalk(walk) {
//     var res = { n: 0, w: 0, s: 0, e: 0 };
//     walk.forEach((c) => res[c]++);
//     return walk.length === 10 && res.n == res.s && res.e == res.w;
//   }
//
//   console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); //, 'should return true'
//   console.log(
//     isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
//   ); //, 'should return false'
//   console.log(isValidWalk(["w"])); //, 'should return false'
//   console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); //, 'should return false'
// }

//Решение задач CodeWars 22/11
// {
//   //Reverse words
//   /**
//    * Напишите функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны сохраняться.
//    *
//    * Примеры
//    * "This is an example!" ==> "sihT si na !elpmaxe"
//    * "double  spaces"      ==> "elbuod  secaps" */
//
//   // function reverseWords(str) {
//   //   let newStr = "";
//   //   let res = str.split("");
//   //   let item = [];
//   //   for (let i = 0; i < res.length; i++) {
//   //     debugger;
//   //     if (res[i] !== " " && i < res.length - 1) {
//   //       item.push(res[i]);
//   //     } else {
//   //       if (i === res.length - 1) {
//   //         if (res[i] !== " ") {
//   //           item.push(res[i]);
//   //           let word = item.reverse();
//   //           newStr += word.join("");
//   //           item = [];
//   //           word = null;
//   //         } else {
//   //           let word = item.reverse();
//   //           newStr += word.join("");
//   //           newStr += " ";
//   //         }
//   //       } else {
//   //         if (item) {
//   //           let word = item.reverse();
//   //           newStr += word.join("");
//   //           item = [];
//   //           word = null;
//   //         }
//   //         newStr += " ";
//   //       }
//   //     }
//   //   }
//   //   return newStr;
//   // }
//
//   //Другое решение
//   // function reverseWords(str) {
//   //   return str
//   //     .split(" ")
//   //     .map((word) => word.split("").reverse().join(""))
//   //     .join(" ");
//   // }
//
//   //Другое решение
//   // function reverseWords(str) {
//   //   let newStr = "";
//   //   let word = "";
//   //   for (let i = 0; i < str.length; i++) {
//   //     debugger;
//   //     if (str[i] !== " ") {
//   //       word = str[i] + word;
//   //     } else {
//   //       newStr += word + " ";
//   //       word = "";
//   //     }
//   //   }
//   //   return newStr;
//   // }
//
//   //Другое решение
//   function reverseWords(str) {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//       newStr += str[i];
//     }
//     return newStr.split(" ").reverse().join(" ");
//   }
//
//   console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); //, 'ehT kciuq nworb xof spmuj revo eht yzal .god'
//   // console.log(reverseWords("apple")); //'elppa'
//   // console.log(reverseWords("a b c d")); //'a b c d'
//   // console.log(reverseWords("  double  spaced  words  ")); //'  elbuod  decaps  sdrow  '
//   console.log(reverseWords("a    hardocoded Kata ")); //'a    dedocodrah  ataK'
// }

// {
//   //
//   //"CodEWaRs" --> [0,3,4,6]
//   function getUpperCase(word) {
//     let res = [];
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === word[i].toUpperCase()) {
//         res.push(i);
//       }
//     }
//     return res;
//   }
//
//   console.log(getUpperCase("CodEWaRs"));
// }

//Решение задач Object.keys, values, entries 23/11
// {
//   //Сумма свойств объекта
//   /**
//    * Есть объект salaries с произвольным количеством свойств,
//    * содержащих заработные платы.
//    *
//    * Напишите функцию sumSalaries(salaries), которая возвращает
//    * сумму всех зарплат с помощью метода Object.values и цикла for..of.
//    *
//    * Если объект salaries пуст, то результат должен быть 0.
//    *
//    * Например:
//    * let salaries = {
//    *   "John": 100,
//    *   "Pete": 300,
//    *   "Mary": 250
//    * };*/
//
//   let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   };
//
//   // function sumSalaries(salaries) {
//   //   return Object.values(salaries).reduce((acc, cur) => acc + cur, 0);
//   // }
//
//   console.log(sumSalaries(salaries));
// }

// {
//   //Подсчёт количества свойств объекта
//   /**
//    * Напишите функцию count(obj),
//    * которая возвращает количество свойств объекта:
//    * let user = {
//    *   name: 'John',
//    *   age: 30
//    * };
//    *
//    * alert( count(user) ); // 2
//    * */
//
//   let user = {
//     name: "John",
//     age: 30,
//   };
//
//   function count(obj) {
//     return Object.keys(obj).length;
//   }
//
//   console.log(count(user));
// }

//CodeWars
// {
//   //FIXME: Замените все точки
//   var replaceDots = function (str) {
//     return str.replace(/\./g, "-");
//   };
//
//   console.log(replaceDots("one.two.three")); //"one-two-three"
// }

// {
// function binToDec(bin) {
//   let dec = 0;
//   //   for (let i = bin.length - 1; i >= 0; i--) {
//   //     debugger;
//   //     dec += bin[bin.length - 1 - i] * 2 ** i;
//   //   }
//   //   return dec;
//   // }
//
//   function binToDec(bin) {
//     return parseInt(bin, 2);
//   }
//   console.log(binToDec("1011"));
// }

//Решение задач CodeWars 24/11
// {
// class PowerArray extends Array {
//   square() {
//     return this.map((number) => number * number);
//   }
//   cube() {
//     return this.map((number) => number ** 3);
//   }
//   average() {
//     return this.reduce((a, b) => a + b, 0) / this.length;
//   }
//   sum() {
//     return this.reduce((a, b) => a + b, 0);
//   }
//   even() {
//     return this.filter((number) => number % 2 == 0);
//   }
//   odd() {
//     return this.filter((number) => number % 2 != 0);
//   }
// }

//   Array.prototype.square = function () {
//     return this.map(function (n) {
//       return n * n;
//     });
//   };
//   Array.prototype.cube = function () {
//     return this.map(function (n) {
//       return n * n * n;
//     });
//   };
//   Array.prototype.average = function () {
//     return this.sum() / this.length;
//   };
//   Array.prototype.sum = function () {
//     return this.reduce(function (a, b) {
//       return a + b;
//     }, 0);
//   };
//   Array.prototype.even = function () {
//     return this.filter(function (item) {
//       return 0 == item % 2;
//     });
//   };
//   Array.prototype.odd = function () {
//     return this.filter(function (item) {
//       return 0 != item % 2;
//     });
//   };
//
//   let arr = [1, 2, 3, 4, 5];
//   console.log(arr.square());
//   console.log(arr.cube());
//   console.log(arr.average());
//   console.log(arr.sum());
//   console.log(arr.even());
//   console.log(arr.odd());
// }

// {
//   //CamelCase Method
//   function camelCase(str) {
//     return str
//       .split(" ")
//       .map((el) => el.replace(el[0], el[0].toUpperCase()))
//       .join("");
//   }
//   console.log(camelCase("hello case"));
// }

// {
//Persistent Bugger.
/**
 * Напишите функцию persistence, которая принимает положительный
 * параметр num и возвращает его мультипликативную устойчивость,
 * то есть количество раз, которое нужно умножить цифры в num до
 * тех пор, пока не получится одна цифра. */

// function persistence(num) {
//   let str = String(num);
//   let count = 0;
//   while (str.length > 1) {
//     let newstr = 1;
//     for (let i = str.length - 1; i >= 0; i--) {
//       newstr *= str[i];
//     }
//     str = `${newstr}`;
//     count++;
//   }
//   return count;
// }
//
//   function persistence(num) {
//     for (var i = 0; num > 9; i++) {
//       debugger;
//       num = num
//         .toString()
//         .split("")
//         .reduce((t, c) => c * t);
//     }
//     return i;
//   }
//   console.log(persistent(39));
//   console.log(persistent(999));
//   console.log(persistent(4));
// }

////Решение задач CodeWars 25/11
//

// {
//   //Возьмем производную
//   /**
//    * Эта функция принимает в качестве параметров два числа: первое число — коэффициент, а второе число — показатель степени.
//    *
//    * Ваша функция должна перемножать два числа, а затем вычитать 1 из показателя степени. Затем она должна возвращать выражение (например, 28x^7). "^1" Не должно быть усечения, если показатель степени равен 2.
//    *
//    * Например:
//    *
//    * derive(7, 8)
//    * В этом случае функция должна перемножить 7 и 8, а затем вычесть 1 из 8. Она должна вывести "56x^7", где первое число 56 — это произведение двух чисел, а второе число — показатель степени минус 1.
//    *
//    * derive(7, 8) --> this should output "56x^7"
//    * derive(5, 9) --> this should output "45x^8" */
//
//   function derive(coefficient, exponent) {
//     return `${coefficient * exponent}x^${exponent - 1}`;
//   }
//
//   console.log(derive(5, 9)); //"45x^8"
//   console.log(derive(7, 8)); //"56x^7"
// }

// {
//   //Минимизировать сумму массива (серия массивов #1)
//   /**
//    * Задача
//    * Данмассив целых чисел. Найдите минимальную сумму, которая
//    * получается при сложении произведений каждых двух целых чисел.
//    *
//    * Примечания
//    * только положительные результаты будут содержать массив / список.
//    * Массив / список всегда будет иметь четный размер
//    * Примеры ввода >> вывода
//    * minSum({5,4,2,3}) ==> return (22)
//    * Объяснение:
//    * получается при суммировании произведений каждых
//    * двух целых чисел Минимальная сумма ,  5*2 + 3*4 = 22*/
//
//   // function minSum(arr) {
//   //   let newarr = [];
//   //   arr.sort((a, b) => a - b);
//   //   for (let i = 0; i < arr.length; i++) {
//   //     debugger;
//   //     newarr.push(arr[i] * arr[arr.length - 1]);
//   //     arr.splice(-1, 1);
//   //   }
//   //   return newarr.reduce((a, b) => a + b);
//   // }
//
//   //Другое решение
//   // function minSum(arr) {
//   //   return arr
//   //     .sort((a, b) => a - b)
//   //     .slice(0, arr.length / 2)
//   //     .reduce(
//   //       (acc, curr, index) => (acc += curr * arr[arr.length - index - 1]),
//   //       0,
//   //     );
//   // }
//
//   //Другое решение
//   const minSum = (arr) =>
//     arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
//
//   console.log(minSum([5, 4, 2, 3])); // 22
//   console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
//   console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); // 74
// }

//Решение задач CodeWars 26/11
// {
//   //Самые короткие шаги к числу
//   /**
//    * Краткие сведения:
//    * Учитывая число num, верните наименьшее количество steps от 1, которое потребуется, чтобы получить именно это число.
//    *
//    * Описание:
//    * A step определяется как либо:
//    *
//    * Добавление 1 к числу: num += 1
//    * Удвоение числа: num *= 2
//    * Вы всегда будете начинать с числа 1 и должны будете вернуть наименьшее количество шагов, чтобы попасть точно на это число.
//    *
//    * 1 <= num <= 10000
//    *
//    * Примеры:
//    *
//    * num == 3 вернет 2 шаги:
//    *
//    * 1 -- +1 --> 2:        1 step
//    * 2 -- +1 --> 3:        2 steps
//    *
//    * 2 steps
//    * num == 12 вернет 4 шаги:
//    *
//    * 1 -- +1 --> 2:        1 step
//    * 2 -- +1 --> 3:        2 steps
//    * 3 -- x2 --> 6:        3 steps
//    * 6 -- x2 --> 12:       4 steps
//    *
//    * 4 steps
//    * num == 16 вернет 4 шаги:
//    *
//    * 1 -- +1 --> 2:        1 step
//    * 2 -- x2 --> 4:        2 steps
//    * 4 -- x2 --> 8:        3 steps
//    * 8 -- x2 --> 16:       4 steps
//    *
//    * 4 steps */
//
//   // function shortestStepsToNum(num) {
//   //   let count = 0;
//   //   while (num > 1) {
//   //     if (num % 2 == 0) {
//   //       num /= 2;
//   //     } else {
//   //       num--;
//   //     }
//   //     count++;
//   //   }
//   //   return count;
//   // }
//
//   //Другое решение
//   // function shortestStepsToNum(num) {
//   //   let count = 0;
//   //   while (num > 1) {
//   //     num % 2 == 0 ? (num /= 2) : num--, count++;
//   //   }
//   //   return count;
//   // }
//
//   function shortestStepsToNum(num) {
//     let bin = num.toString(2).substr(1);
//     return bin.length + (bin.match(/1/g) || []).length;
//   }
//
//   console.log(shortestStepsToNum(12));
//   console.log(shortestStepsToNum(3));
//   console.log(shortestStepsToNum(16));
// }
//
// {
//   // function dataReverse(data) {
//   //   let newArr = [];
//   //   while (data.length > 0) {
//   //     newArr.push(data.slice(-8));
//   //     data.splice(-8, 8);
//   //   }
//   //   return newArr;
//   // }
//
//   //Другое решение
//   // function dataReverse(data) {
//   //   let nestedArrs = [];
//   //
//   //   while (data.length > 0) {
//   //     nestedArrs.push(data.splice(0, 8));
//   //   }
//   //
//   //   let reversedNestedArr = nestedArrs.reverse();
//   //   let finalArr = [];
//   //
//   //   reversedNestedArr.forEach(function (arr) {
//   //     for (let i = 0; i < arr.length; i++) {
//   //       let num = arr[i];
//   //
//   //       finalArr.push(num);
//   //     }
//   //   });
//   //
//   //   return finalArr;
//   // }
//
//   // console.log(
//   //   dataReverse([
//   //     1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
//   //     0, 1, 0, 1, 0, 1, 0,
//   //   ]),
//   // );
//
//   // console.log(
//   //   dataReverse([
//   //     1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//   //     1, 1, 1, 1, 1, 1, 1,
//   //   ]),
//   // );
//
//   console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
//   console.log(dataReverse([0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]));
// }

//Решение задач CodeWars 27/11
// {
//   // function wordsToMarks(string) {
//   //   const alphabet = [
//   //     "a",
//   //     "b",
//   //     "c",
//   //     "d",
//   //     "e",
//   //     "f",
//   //     "g",
//   //     "h",
//   //     "i",
//   //     "j",
//   //     "k",
//   //     "l",
//   //     "m",
//   //     "n",
//   //     "o",
//   //     "p",
//   //     "q",
//   //     "r",
//   //     "s",
//   //     "t",
//   //     "u",
//   //     "v",
//   //     "w",
//   //     "x",
//   //     "y",
//   //     "z",
//   //   ];
//   //   let sum = 0;
//   //   for (let i = 0; i < string.length; i++) {
//   //     sum += alphabet.indexOf(string[i]) + 1;
//   //   }
//   //   return sum;
//   // }
//
//   //Другое решение
//   // const wordsToMarks = (s) =>
//   //   [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);
//
//   //Другое решение
//   function wordsToMarks(string) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let marks = 0;
//     string.split("").forEach((char) => {
//       marks += alphabet.indexOf(char) + 1;
//     });
//     return marks;
//   }
//
//   console.log(wordsToMarks("attitude")); // 100
//   console.log(wordsToMarks("friends")); // 75
// }

// {
//   // function generateRange(min, max, step) {
//   //   let arr = [];
//   //   for (let i = min; i <= max; i += step) {
//   //     arr.push(i);
//   //   }
//   //   return arr;
//   // }
//
//   console.log(generateRange(1, 10, 1)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   console.log(generateRange(-10, 1, 1)); //[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
//   console.log(generateRange(1, 15, 20)); //[1]
// }

// {
//   //Напишите цикл, который выводит такой треугольник:
//   /**
//    * #
//    * ##
//    * ###
//    * ####
//    * #####
//    * ######
//    * #######*/
//   // function triangle(num) {
//   //   let str = [];
//   //   for (var i = 1; i <= num; i++) {
//   //     debugger;
//   //     let count = 0;
//   //     while (count < i) {
//   //       str.push("#");
//   //       count++;
//   //     }
//   //     console.log(str.join(""));
//   //     str.splice(0, str.length);
//   //   }
//   // }
//   //Другое решение
//   // let i = "#";
//   // while (i.length <= 7) {
//   //   console.log(i);
//   //   i = i + "#";
//   // }
//   //Другое решение
//   for (let a = "#"; a.length <= 7; a = a + "#") {
//     console.log(a);
//   }
//   // console.log(triangle(3));
// }

///Решение задач CodeWars 28/11
// {
//   //Print a Rectangle Using Asterisks
//   //Выведите прямоугольник со звездочками
//   /**
//    * Напишите метод, который, получив два аргумента width и height, возвращает строку, представляющую прямоугольник с такими размерами.
//    *
//    * Прямоугольник должен быть заполнен пробелами, а его границы должны состоять из звёздочек (*).
//    *
//    * Например, следующий вызов:
//    *
//    * getRectangleString(3, 3);
//    * Должна возвращать следующую строку:
//    *
//    * ***
//    * * *
//    * ***
//    * Завершите каждую строку (включая последнюю) комбинацией возврата каретки и перевода строки.
//    *
//    * Примечание: можно предположить, что ширина и высота всегда будут больше нуля.*/
//
//   // function getRectangleString(width, height) {
//   //   const rn = "\r\n";
//   //   const tb = "*".repeat(width) + rn;
//   //   const canter =
//   //     width > 1
//   //       ? ("*" + " ".repeat(width - 2) + "*" + rn).repeat(height - 2)
//   //       : "";
//   //   return height > 1 ? tb + canter + tb : tb.repeat(height);
//   // }
//
//   console.log(getRectangleString(3, 3));
//   console.log(getRectangleString(5, 7));
//   console.log(getRectangleString(2, 2));
//   console.log(getRectangleString(1, 1));
// }
//
// {
//   //Find the missing element between two arrays
//   //Найти недостающий элемент между двумя массивами
//   /**
//    * Даны два массива целых чисел, где второй массив является перемешанной копией первого массива с одним отсутствующим элементом. Найдите отсутствующий элемент.
//    *
//    * Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном массиве и отсутствие его в другом — неверное решение.
//    *
//    * find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
//    * find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
//    * В первом массиве всегда будет хотя бы один элемент.
//    * */
//
//   // function findMissing(arr1, arr2) {
//   //   let index;
//   //   for (let i = 0; i < arr1.length; i++) {
//   //     index = arr2.indexOf(arr1[i]);
//   //     if (index > -1) {
//   //       arr2.splice(index, 1);
//   //     } else {
//   //       return arr1[i];
//   //     }
//   //   }
//   // }
//
//   // const findMissing = (arr1, arr2) => {
//   //   arr1 = arr1.sort();
//   //   arr2 = arr2.sort();
//   //   for (let i = 0; i < arr1.length; i++) {
//   //     if (arr1[i] != arr2[i]) return arr1[i];
//   //   }
//   // };
//
//   const sum = (arr) => arr.reduce((a, b) => a + b, 0);
//
//   const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);
//
//   console.log(findMissing([1, 2, 3], [1, 3])); //2
//   console.log(findMissing([6, 6, 1, 2], [6, 1, 2])); //6
//   console.log(findMissing([7], [])); //7
// }

// {
//   //Is he gonna survive?
//   //Он выживет?
//   /**
//    * Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружён парой могущественных драконов! Чтобы победить каждого дракона, нужно 2 пули, но наш герой понятия не имеет, сколько пуль ему нужно взять с собой. Если предположить, что он возьмёт определённое количество пуль и отправится сражаться с другим определённым количеством драконов, выживет ли он?
//    *
//    * Верните true, если да, false в противном случае :)*/
//
//   // function hero(bullets, dragons) {
//   //   return dragons * 2 <= bullets;
//   // }
//
//   function hero(bullets, dragons) {
//     //Get Coding!
//     return bullets / 2 >= dragons ? true : false;
//   }
//
//   console.log(hero(10, 5)); //true
//   console.log(hero(7, 4)); //false
// }

//Решение задач CodeWars 29/11
// {
//Факториальная длина
/**
 * В этом задании вы реализуете функцию count,
 * которая принимает целое число и возвращает количество цифр
 * в factorial(n).
 *
 * Например, count(5) = 3, потому что 5! = 120 и 120 имеет 3 цифры.
 *
 * Дополнительные примеры в тестовых примерах.
 *
 * Грубая сила здесь не поможет.
 * Немного исследований — и дело в шляпе,
 * так как это хорошо известная серия.
 */

// function count(n) {
//   let number = 0;
//   let count = [];
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     res.push(BigInt(i));
//   }
//   count =
//     "" +
//     res.reduce((acc, curr) => {
//       return BigInt(acc * curr);
//     });
//   for (let char of count) {
//     number++;
//   }
//
//   return number;
// }

//   function count(n) {
//     // Add some code
//     if (n < 0) {
//       return null;
//     }
//     if (n == 0 || n == 1) {
//       return "1";
//     }
//     let result = [1];
//     for (let num = 2; num <= n; num++) {
//       for (let i = 0, plus = 0; i < result.length || plus != 0; i++) {
//         let count = i < result.length ? num * result[i] + plus : plus; // If the current I is less than the number of digits that are numbered, * Num + Plus; if equal, then directly carry.
//         result[i] = count % 10; //  , ten, 100 ... The number on the array is stored in the array result
//         plus = (count - result[i]) / 10;
//       }
//     }
//     return result.reverse().length; // After the array result is reversed, it is the last step.
//   }
//
//   console.log(count(5)); //3
//   console.log(count(50)); //65
//   console.log(count(500)); //1135
// }

// {
//   //Сверхсовершенные числа (серия специальных чисел #7)
//   function extraPerfect(n) {
//     const res = [];
//     for (var i = 1; i <= n; i += 2) {
//       res.push(i);
//     }
//     return res;
//   }
//
//   console.log(extraPerfect(3)); // [1,3]
//   console.log(extraPerfect(28)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
// }

{
  //Are they the "same"?
  function comp(a, b) {
    if (a == null || b == null) return false;
    let res = true;
    for (let i = 0; i < a.length; i++) {
      if (!a.includes(Math.sqrt(b[i]))) {
        res = false;
      }
    }
    return res;
  }

  const a = [121, 144, 19, 161, 19, 144, 19, 11];
  const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
  console.log(comp(a, b));
}
