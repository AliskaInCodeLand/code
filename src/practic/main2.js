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

//Решение задач 18/12
//Sudoku

let input = [
  ["4", ".", "1", "."],
  [".", "2", ".", "."],
  [".", ".", "3", "."],
  [".", ".", "2", "."],
];

// let input = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]

let solveSudoku = function (board) {
  const size = 4;
  const boxSize = 2;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === ".") {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    //Check rows
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    //Check cols
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    //Check box
    const bowRow = Math.floor(r / boxSize) * boxSize;
    const bowCol = Math.floor(c / boxSize) * boxSize;

    for (let i = 0; i < boxRow + boxSize; i++) {
      for (let j = 0; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    return false;
  };

  solve();
  return board;
};

console.log(input);
console.log(solveSudoku(input));
