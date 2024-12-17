//Решение задач 15/12
// //
// const input1 = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
//
// const input2 = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ];
//
// const setZeroes = function (matrix) {
//   let isCol = false;
//
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[i][0] = 0;
//         matrix[0][j] = 0;
//         isCol = true;
//       }
//     }
//   }
//
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][0] === 0) {
//         while (matrix[i].length > 0) {
//           matrix[i][j] = 0;
//           j++;
//         }
//
//         matrix[i].forEach((el) => (el = 0));
//       }
//       if (matrix[0][j] === 0 && isCol) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//
//   return matrix;
// };
//
// console.log(setZeroes(input2));
//
// let user = { name: "John" };
//
// let admin = user;
//
// admin.name = "Pete"; // изменено по ссылке из переменной "admin"
//
// alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"
