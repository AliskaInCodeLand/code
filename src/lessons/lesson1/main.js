{
  // Типы данных
  // sting
  // number
  // boolean
  // null
  // undefined
  // symbol
  // object
  // ? посмотреть типы данных
  //Ответ: BigInt - предназначен для представления очень больших целых чисел.
}

/*{
    // Object - это неупорядоченная коллекция свойств, где каждое из свойств состоит из пары стрингового ключа и значения()
    // массив - упорядоченная коллекция свойств, каждое из которых состоит из цифрового ключа и значения

    const object ={
        1: "one",
    }



    object.color = "white";

    const clr = "black";

    object[clr] = clr;

    object["my Name"] = "red";

    console.log(object);
    console.log(object.color);
    console.log(object["my Name"]);

    delete object.black;
    console.log(object);

}*/

// {
//     // 1. Реализовать с помощью функции
//     // input: ["apple", "apple", "apple", "banana", "kiwi", "mango", "banana"]
//     // output: {apple: 3, banana: 2, kiwi: 1, mango: 1}

//     function fructs (fructs) {
//         const obj ={};
//         for (let i = 0; i < fructs.length; i++){
//             if (!obj[fructs[i]]){
//                 obj[fructs[i]] = 1;
//             }
//             else{
//                 obj[fructs[i]] += 1;
//             }
//         }
//         return obj;
//     }

//     console.log(fructs (["apple", "apple", "apple", "banana", "kiwi", "mango", "banana"]) )
// }

// {
//     // 4. C помощью цикла найти самое большой элемент в массиве, ( не использовать Match.max)
//     // input: [-10,5,7,66,44]
//     // output: 66

//     function maxNumber (arr) {
//         let num = arr[0];
//         for (let i = 0; i < arr.length; i++){
//             if(num < arr[i]){
//                 num = arr[i];
//             }

//         }
//         return num;
//     }

//     console.log( maxNumber ([-10,5,7,66,44]))
// }

// {
//     // parseInt()
//     const str = "10";
//     const str2 = "10ww";
//     console.log(parseInt(str2))

//     console.log(+str2)

//     console.log(Number(str2))

//     const word = "Hello";
//     const word2 = "world";

//     console.log(word + " " + word2);

//     console.log(10+ "" +2);

//     const color = "black";
//     console.log(Boolean(color));

//     console.log(!!color);
// }

// {
//     // function typeValidation(variable, type) {
//     //     // if ( typeof variable  === type ){
//     //     //     return true;
//     //     // }
//     //     // return false;
//     //     return typeof variable === type;
//     // }
//
//     const typeValidation = (variable, type) => typeof variable === type
//
//     console.log(typeValidation(42, "number")); //true
//     console.log(typeValidation("42", "number")); //false
// }

//преобразование типов
//мутабельные методы
//методы
//
