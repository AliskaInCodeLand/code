// {
//     /**
//      * Суммирование
//     Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым, большим 0. Ваша функция должна возвращать только результат. То, что показано в скобках в примере ниже, — это способ получения результата, а не его часть. Ознакомьтесь с примерами тестов.

//     Например, (Ввод -> Вывод):

//     2 -> 3 (1 + 2)
//     8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//     */

//     var summation = function (num) {
//         let count = 0;
//         for (let i = 1; i <= num; i++){
//             count += i;
//         }
//         return count;
//     }

//     //Другой вариант решения

//     function summation(num) {
//         return num * (num + 1) / 2
//     }

//     console.log(summation(1)); //1
//     console.log(summation(2)); //3
//     console.log(summation(8)); //36
// }

// {
//     /**
//      * Подсчет овец
//      * Рассмотрим массив/список овец, в котором некоторые овцы могут
//      * отсутствовать.
//      * Нам нужна функция, которая подсчитывает количество овец в массиве
//      * (истина означает наличие).
//      * Например,

//         [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
//         Правильный ответ был бы 17.

//         Подсказка: не забудьте проверить наличие недопустимых значений,
//         таких как null/undefined
//      */

//     function countSheeps(sheep) {
//         let count = 0;
//         for (let i =0; i < sheep.length; i++){
//             if (sheep[i]){
//                 count++;
//             }
//         }
//         return count;
//     }

//     //Другой вариант решения

//     function countSheeps(sheep) {
//         return sheep.filter(Boolean).length;
//     }


//     //Другой вариант решения

//     function countSheeps(sheep) {
//         return sheep.reduce(function(acc, cur) {
//             if (cur) acc++
//             return acc;
//         }, 0);
//     }

//     const sheep = [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true];

//     console.log(countSheeps(sheep)) //17
// }

// {
//     /**
//      * Изограммы
//      * Изограмма — это слово, в котором нет повторяющихся букв, как последовательных, так и непоследовательных. Реализуйте функцию, которая определяет, является ли строка, состоящая только из букв, изограммой. Предположим, что пустая строка является изограммой. Не учитывайте регистр букв.
//
//      Пример: (Ввод --> Вывод)
//
//      "Dermatoglyphics" --> true
//      "aba" --> false
//      "moOse" --> false (ignore letter case)
//      */
//
//     function isIsogram(str){
//         let bool = true;
//         if (str !== ''){
//             str = str.split('');
//             for (let i = 1; i <str.length; i++ ){
//                 let a = str[i]
//                 str.splice(i, 1)
//                 if (str.find(num => num === a)){
//                     bool = false;
//                 }
//             }
//         }
//         return bool
//     }
//
//
//     // console.log(isIsogram("Dermatoglyphics")); //true
//     console.log(isIsogram("isogram")); //true
//     console.log(isIsogram("aba")); //false, "same chars may not be adjacent"
//     // console.log(isIsogram("moOse")); // false, "same chars may not be same case"
//     // console.log(isIsogram("isIsogram")); // false
//     // console.log(isIsogram("")); // true, "an empty string is a valid isogram"
// }

// {
//     /**
//      * Делится ли n на x и y?
//      * Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные — положительные, ненулевые числа.
//      *
//      * Examples:
//      * 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
//      * 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
//      * 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
//      * 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5*/
//
//     function isDivisible(n, x, y) {
//         if ((n % x == 0) && (n % y == 0)) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//
//     console.log(isDivisible(3,3,4)); //false
//     console.log(isDivisible(12,3,4)); // true
//     console.log(isDivisible(8,3,4)); //false
// }

{
    /**
     * Дополните решение так, чтобы оно переворачивало все слова в переданной строке.
     *
     * Слова разделяются ровно одним пробелом, без пробелов в начале или в конце.
     *
     * Пример (Ввод --> Вывод):
     *
     * "The greatest victory is that which requires no battle" -->
     * "battle no requires which that is victory greatest The"*/

    function reverseWords(str){
        return str;
    }
}