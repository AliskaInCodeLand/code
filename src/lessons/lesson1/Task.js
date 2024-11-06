// {
//     // Преобразование типов? еще раз
//     // Задачи на следующие занятие
//     // Просмотр видео Богдана 2-5 часов
//     // Мутабельные методы массивов?
//     // Практика с методамми массивов
//     // Ознакомится с областью видемости
//     // Решить и прислать код нескольких кат с codewars
// }

// {
//     //Переведите текст вида border-left-width в borderLeftWidth
//
//     function camelize(str){
//         str = str.split('');
//         for (var i = 0; i < str.length; i++) {
//             if(str[i] == '-'){
//                 str[i+1] = str[i+1].toUpperCase();
//                 delete str[i];
//             }
//         }
//         return str.join('');
//     }

//      //Решение учебника
//
//     // function camelize(str) {
//     //     return str
//     //         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     //         .map(
//     //             // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//     //             // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//     //             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     //         )
//     //         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//     // }
//
//     console.log(camelize("background-color")); //'backgroundColor';
//     console.log(camelize("list-style-image")); //'listStyleImage'
//     console.log(camelize("-webkit-transition")); //'WebkitTransition'
// }

// {
//     /**
//      * Фильтрация по диапазону
//      * важность: 4
//      * Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//      * ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
//      *
//      * Функция должна возвращать новый массив и не изменять исходный.
//      *
//      * Например:
//      *
//      * let arr = [5, 3, 8, 1];
//      *
//      * let filtered = filterRange(arr, 1, 4);
//      *
//      * alert( filtered ); // 3,1 (совпадающие значения)
//      *
//      * alert( arr ); // 5,3,8,1 (без изменений)
//      */
//
//     let arr = [5, 3, 8, 1];
//
//     function filterRange(arr, a, b){
//         const arr1 = arr.filter(num => ((num > a || num === a) && (num < b || num === b)));
//         return arr1;
//     }
//
//     //Решение учебника
//
//     // function filterRange(arr, a, b) {
//     //     // добавлены скобки вокруг выражения для улучшения читабельности
//     //     return arr.filter(item => (a <= item && item <= b));
//     // }
//     //
//     // let arr = [5, 3, 8, 1];
//     //
//     // let filtered = filterRange(arr, 1, 4);
//     //
//     // alert( filtered ); // 3,1 (совпадающие значения)
//     //
//     // alert( arr ); // 5,3,8,1 (без изменений)
//
//     console.log(filterRange(arr, 1, 4));
//     console.log(arr);
// }

// {
//     /**Фильтрация по диапазону "на месте"
//      важность: 4
//      Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и
//      удаляет из него все значения кроме тех, которые находятся между a и b.
//      То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
//      Функция должна изменять принимаемый массив и ничего не возвращать.
//      Например:
//
//      let arr = [5, 3, 8, 1];
//
//      filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
//      alert( arr ); // [3, 1]*/
//
//         //Не знаю, как мутировать массив, находящийся в глобальной области видимости, а не в области видимости функции
//
//     let arr = [5, 3, 8, 1];
//
//     function filterRangeInPlace(arr, a, b) {
//         for (let i = 0; i < arr.length; i++) {
//             //Поняла в чём была ошибка. Неправильное условие с диапазоном
//             // if (a < arr[i]< b) {
//             if ((a < arr[i]) &&  (arr[i]< b)) {
//                 return arr[i];
//             }
//             else{
//                 arr.splice(i, 1);
//             }
//         }
//     }
//
//     //Решение из учебника (посмотрела, так как не догадалась сама, как мутировать массив)
//     //
//     // function filterRangeInPlace(arr, a, b) {
//     //     for (let i = 0; i < arr.length; i++) {
//     //         let num = arr[i];
//     //         if (a < num && num > b) {
//     //             arr.splice(i, 1);
//     //             i--;
//     //         }
//     //     }
//     // }
//
//     filterRangeInPlace(arr, 1, 4)
//     console.log(arr); // [3, 1]
// }

// {
//     /**Сортировать в порядке по убыванию
//      важность: 4
//      let arr = [5, 2, 1, -10, 8];
//
//      // ... ваш код для сортировки по убыванию
//
//      alert( arr ); // 8, 5, 2, 1, -10*/
//
//     let arr = [5, 2, 1, -10, 8];
//
//     function decrease (nums){
//         nums.sort((a,b) => b - a);
//         return nums;
//     }
//
//     decrease(arr);
//
//     console.log(arr); //8, 5, 2, 1, -10
// }

// {
//     /**Скопировать и отсортировать массив
//      важность: 5
//      У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
//      Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//
//      let arr = ["HTML", "JavaScript", "CSS"];
//
//      let sorted = copySorted(arr);
//
//      alert( sorted ); // CSS, HTML, JavaScript
//      alert( arr ); // HTML, JavaScript, CSS (без изменений)*/
//
//     let arr = ["HTML", "JavaScript", "CSS"];
//
//     let sorted = copySorted(arr);
//
//     // function copySorted(arr) {
//     //     const newArr = arr.map( item => item);
//     //     return newArr.sort();
//     // }
//
//     //Решение из учебника
//     function copySorted(arr) {
//         //Array.slice возвращает новый массив.
//         return arr.slice().sort();
//     }
//
//     console.log(sorted); // CSS, HTML, JavaScript
//     console.log(arr); // HTML, JavaScript, CSS
// }

// {
//     /**
//      * Создать расширяемый калькулятор
//      * важность: 5
//      * Создайте функцию конструктор Calculator,
//      * которая создаёт «расширяемые» объекты калькулятора.
//      *
//      * Задание состоит из двух частей.
//      *
//      * Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
//      *
//      * Пример использования:
//      *
//      * let calc = new Calculator;
//      *
//      * alert( calc.calculate("3 + 7") ); // 10
//      * Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
//      *
//      * Например, давайте добавим умножение *, деление / и возведение в степень **:
//      *
//      * let powerCalc = new Calculator;
//      * powerCalc.addMethod("*", (a, b) => a * b);
//      * powerCalc.addMethod("/", (a, b) => a / b);
//      * powerCalc.addMethod("**", (a, b) => a ** b);
//      *
//      * let result = powerCalc.calculate("2 ** 3");
//      * alert( result ); // 8
//      * Для этой задачи не нужны скобки или сложные выражения.
//      * Числа и оператор разделены ровно одним пробелом.
//      * Не лишним будет добавить обработку ошибок.*/
//
//
// }

// {
//     /**
//      * Трансформировать в массив имён
//      * важность: 5
//      * У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
//      *
//      * Например:
//      *
//      * let vasya = { name: "Вася", age: 25 };
//      * let petya = { name: "Петя", age: 30 };
//      * let masha = { name: "Маша", age: 28 };
//      *
//      * let users = [ vasya, petya, masha ];
//      *
//      * let names = /* ... ваш код
//      * alert(names); // Вася, Петя, Маша*/
//
//     let vasya = { name: "Вася", age: 25 };
//     let petya = { name: "Петя", age: 30 };
//     let masha = { name: "Маша", age: 28 };
//
//     let users = [ vasya, petya, masha ];
//
//     let names = users.map(user => user.name);
//
//     console.log(names);
// }

// {
//     /**
//      * Трансформировать в объекты
//      * важность: 5
//      * У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//      *
//      * Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
//      *
//      * Например:
//      *
//      * let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//      * let petya = { name: "Петя", surname: "Иванов", id: 2 };
//      * let masha = { name: "Маша", surname: "Петрова", id: 3 };
//      *
//      * let users = [ vasya, petya, masha ];
//      *
//      * let usersMapped = /* ... ваш код ... */
//
//     let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//     let petya = { name: "Петя", surname: "Иванов", id: 2 };
//     let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
//     let users = [ vasya, petya, masha ];
//
//     // let usersMapped = users.map(user => {
//     //     user.fullName = user.name + "-" + user.surname;
//     //     delete user.surname;
//     //     delete user.name;
//     //     return user;
//     // });
//
//     //Решение из учебника
//     let usersMapped = users.map(user => ({
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     }));
//
//     console.log( usersMapped[0].id ) // 1
//     console.log( usersMapped[0].fullName ) // Вася Пупкин
// }

// {
//     /**
//      * Отсортировать пользователей по возрасту
//      * важность: 5
//      * Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
//      *
//      * Например:
//      *
//      * let vasya = { name: "Вася", age: 25 };
//      * let petya = { name: "Петя", age: 30 };
//      * let masha = { name: "Маша", age: 28 };
//      *
//      * let arr = [ vasya, petya, masha ];
//      *
//      * sortByAge(arr);
//      *
//      * // теперь: [vasya, masha, petya]
//      * alert(arr[0].name); // Вася
//      * alert(arr[1].name); // Маша
//      * alert(arr[2].name); // Петя*/
//
//     let vasya = { name: "Вася", age: 25 };
//     let petya = { name: "Петя", age: 30 };
//     let masha = { name: "Маша", age: 28 };
//
//     let arr = [ vasya, petya, masha ];
//
//     function sortByAge(users){
//         return users.sort((a, b) => a.age - b.age);
//     }
//
//     sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
//     console.log(arr[0].name); // Вася
//     console.log(arr[1].name); // Маша
//     console.log(arr[2].name); // Петя
// }

// {
//     /**
//      * Перемешайте массив
//      * важность: 3
//      * Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//      *
//      * Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//      *
//      * let arr = [1, 2, 3];
//      *
//      * shuffle(arr);
//      * // arr = [3, 2, 1]
//      *
//      * shuffle(arr);
//      * // arr = [2, 1, 3]
//      *
//      * shuffle(arr);
//      * // arr = [3, 1, 2]
//      * // ...
//      * Все последовательности элементов должны иметь одинаковую вероятность.
//      * Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
//      * или [3,1,2] и т.д., с равной вероятностью каждого случая.*/
//
//     let arr = [1, 2, 3];
//
//     // function shuffle(arr) {
//     //     arr.sort(() => Math.random() - 0.5);
//     //     return arr;
//     // }
//
//     //Или
//
//     function shuffle(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
//             // поменять элементы местами
//             // мы используем для этого синтаксис "деструктурирующее присваивание"
//             // подробнее о нём - в следующих главах
//             // то же самое можно записать как:
//             // let t = array[i]; array[i] = array[j]; array[j] = t
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     }
//
//     console.log(shuffle(arr));
// }