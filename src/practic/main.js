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
//   function rounders(value) {
//     let count = 1;
//     while (value > 10) {
//       debugger;
//       value = Math.round(value / 10);
//       count *= 10;
//     }
//     return value * count;
//   }
//
//   console.log(rounders(69358538)); //70 000 000
//   console.log(rounders(1234)); //1000
//   console.log(rounders(1445)); //2000
//   console.log(rounders(14)); //10
// }
