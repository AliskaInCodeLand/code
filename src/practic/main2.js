// //Решение задач 15/12
// // //
// // const input1 = [
// //   [1, 1, 1],
// //   [1, 0, 1],
// //   [1, 1, 1],
// // ];
// //
// // const input2 = [
// //   [0, 1, 2, 0],
// //   [3, 4, 5, 2],
// //   [1, 3, 1, 5],
// // ];
// //
// // const setZeroes = function (matrix) {
// //   let isCol = false;
// //
// //   for (let i = 0; i < matrix.length; i++) {
// //     for (let j = 0; j < matrix[i].length; j++) {
// //       if (matrix[i][j] === 0) {
// //         matrix[i][0] = 0;
// //         matrix[0][j] = 0;
// //         isCol = true;
// //       }
// //     }
// //   }
// //
// //   for (let i = 0; i < matrix.length; i++) {
// //     for (let j = 0; j < matrix[i].length; j++) {
// //       if (matrix[i][0] === 0) {
// //         while (matrix[i].length > 0) {
// //           matrix[i][j] = 0;
// //           j++;
// //         }
// //
// //         matrix[i].forEach((el) => (el = 0));
// //       }
// //       if (matrix[0][j] === 0 && isCol) {
// //         matrix[i][j] = 0;
// //       }
// //     }
// //   }
// //
// //   return matrix;
// // };
// //
// // console.log(setZeroes(input2));
// //
//
// //Решение задач 18/12
// //Sudoku
//
// // let input = [
// //   ["4", ".", "1", "."],
// //   [".", "2", ".", "."],
// //   [".", ".", "3", "."],
// //   [".", ".", "2", "."],
// // ];
//
// let input = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
//
// let solveSudoku = function (board) {
//   const size = 9;
//   const boxSize = 3;
//
//   const findEmpty = (board) => {
//     for (let r = 0; r < size; r++) {
//       for (let c = 0; c < size; c++) {
//         if (board[r][c] === ".") {
//           return [r, c];
//         }
//       }
//     }
//     return null;
//   };
//
//   const validate = (num, pos, board) => {
//     const [r, c] = pos;
//
//     //Check rows
//     for (let i = 0; i < size; i++) {
//       if (board[i][c] === num && i !== r) {
//         return false;
//       }
//     }
//
//     //Check cols
//     for (let i = 0; i < size; i++) {
//       if (board[r][i] === num && i !== c) {
//         return false;
//       }
//     }
//
//     //Check box
//     const boxRow = Math.floor(r / boxSize) * boxSize;
//     const boxCol = Math.floor(c / boxSize) * boxSize;
//
//     for (let i = boxRow; i < boxSize; i++) {
//       for (let j = boxCol; j < boxSize; j++) {
//         if (board[i][j] === num && i !== r && j !== c) {
//           return false;
//         }
//       }
//     }
//
//     return true;
//   };
//
//   const solve = () => {
//     const currPos = findEmpty(board);
//
//     if (currPos === null) {
//       return true;
//     }
//
//     // console.log("-----------------------------------------");
//     for (let i = 1; i < size + 1; i++) {
//       const currNum = i.toString();
//       const isValid = validate(currNum, currPos, board);
//
//       // console.log("currPos ", currPos, "currNum", currNum, "isValid", isValid);
//
//       if (isValid) {
//         const [x, y] = currPos;
//         board[x][y] = currNum;
//
//         if (solve()) {
//           return true;
//         }
//
//         board[x][y] = ".";
//       }
//     }
//
//     return false;
//   };
//
//   solve();
//   return board;
// };
//
// console.table(input);
// console.table(solveSudoku(input));

//Решение задачи 19/12

const input1 = 121; //output: true
const input2 = -121; //output: false
const input3 = 10; //output: false

function isPalindromeNumber(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let rev = 0;
  while (x > rev) {
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x / 10);
  }

  return x === rev || x === Math.trunc(rev / 10);
}

console.log(isPalindromeNumber(input1));
console.log(isPalindromeNumber(input2));
console.log(isPalindromeNumber(input3));
