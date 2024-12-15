//Решение задач 13/12
//sum of Three
// {
//   const array = [-1, 0, 1, 2, -1, -4];
//
//   const threeSum = function (nums, target = 0) {
//     const result = [];
//     if (nums.length < 3) return result;
//
//     nums = nums.sort((a, b) => a - b);
//
//     for (let i = 0; i < nums.length - 2; i++) {
//       if (nums[i] > target) break;
//
//       if (i > 0 && nums[i] === nums[i - 1]) {
//         continue;
//       }
//
//       let j = i + 1;
//       let k = nums.length - 1;
//
//       while (j < k) {
//         let sum = nums[i] + nums[j] + nums[k];
//         if (sum === target) {
//           result.push([nums[i], nums[j], nums[k]]);
//
//           while (nums[j] === nums[j + 1]) j++;
//           while (nums[k] === nums[k - 1]) k--;
//
//           j++;
//           k--;
//           continue;
//         }
//         if (sum < target) {
//           j++;
//           continue;
//         }
//         if (sum > target) {
//           k--;
//           continue;
//         }
//       }
//     }
//     return result;
//   };
//
//   console.log(threeSum(array)); // [[-1, -1, 2], [-1, 0, 1]]
// }
// {
//   const arr1 = [1, 1, 2];
//   const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];
//
//   let removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//       debugger;
//       if (nums[i] === nums[i - 1]) {
//         nums.splice(i, 1);
//         i--;
//       }
//     }
//     return nums.length;
//   };
//
//   console.log(removeDuplicates(arr1));
//   console.log(arr1);
//   console.log(removeDuplicates(arr2));
//   console.log(arr2);
// }
// {
//   const input = [4, 1, 2, 1, 2];
//
//   // function singleCode(nums) {
//   //   for (let i = 0; i < nums.length - 1; i++) {
//   //     debugger;
//   //     for (let j = i + 1; j < nums.length; j++) {
//   //       if (nums[i] === nums[j]) {
//   //         nums.splice(i, 1);
//   //         nums.splice(j - i, 1);
//   //         i--;
//   //         j--;
//   //       }
//   //     }
//   //   }
//   //   return nums;
//   // }
//
//   // function singleCode(nums) {
//   //   let uniq = new Set();
//   //   let uniqSum = 0;
//   //   let numSum = 0;
//   //
//   //   for (let i = 0; i < nums.length; i++) {
//   //     debugger;
//   //     const current = nums[i];
//   //
//   //     if (!uniq.has(current)) {
//   //       uniq.add(current);
//   //       uniqSum += current;
//   //     }
//   //     numSum += current;
//   //   }
//   //   return uniqSum * 2 - numSum;
//   // }
//
//   function singleCode(nums) {
//     let uniq = Array.from(new Set(nums));
//
//     let reduceSum = (a, b) => a + b;
//
//     let uniqSum = uniq.reduce(reduceSum);
//     let numSum = nums.reduce(reduceSum);
//
//     return uniqSum * 2 - numSum;
//   }
//
//   console.log(singleCode(input));
// }

//Решение задач 14/12
// {
//   const input1 = [0, 0, 0, 1, 0, 0, 0, 1]; //2
//   const input2 = [1, 0, 0, 0]; //3
//
//   // const maxDistToClosest = function (seats) {
//   //   let max = 0;
//   //   let sumNone = 0;
//   //   let num = 0;
//   //   for (let i = 0; i < seats.length; i++) {
//   //     debugger;
//   //     if (seats[i] === 1 && num === 0) {
//   //       num = seats[i];
//   //       continue;
//   //     }
//   //     if (seats[i] === 0) {
//   //       sumNone++;
//   //       if (sumNone > max) {
//   //         max = sumNone;
//   //       }
//   //     }
//   //     if (seats[i] === 1 && num !== 0) {
//   //       num = 0;
//   //       sumNone = 0;
//   //       max--;
//   //     }
//   //   }
//   //   return max;
//   // };
//
//   // const maxDistToClosest = function (seats) {
//   //   let max = 0;
//   //   let count = 0;
//   //   let i = 0;
//   //
//   //   if (seats[i] === 0) {
//   //     while (seats[i] === 0) {
//   //       i++;
//   //       count++;
//   //     }
//   //
//   //     max = count;
//   //     count = 0;
//   //   }
//   //
//   //   for (; i < seats.length; i++) {
//   //     let current = seats[i];
//   //     if (i === seats.length - 1 && current === 0) {
//   //       count++;
//   //       max = Math.max(max, count);
//   //       break;
//   //     }
//   //
//   //     if (current === 1) {
//   //       count = 0;
//   //     } else {
//   //       count++;
//   //       max = Math.max(max, Math.ceil(count / 2));
//   //     }
//   //   }
//   //   return max;
//   // };
//   //
//   // console.log(maxDistToClosest(input1));
//   // console.log(maxDistToClosest(input2));
// }

import { i } from "vite/dist/node/types.d-aGj9QkWt.js";

// {
//   const matrix1 = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];
//
//   const matrix2 = [
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ];
//
//   function matrixWithZero(matrix) {
//     let ROWS = matrix.length;
//     let COLS = matrix[0].length;
//     let isCol = false;
//
//     for (let i = 0; i < ROWS; i++) {
//       if (matrix[i][0] === 0) {
//         isCol = true;
//       }
//       for (let j = 0; j < COLS; j++) {
//         if (matrix[i][j] === 0) {
//           matrix[i][0] = 0;
//           matrix[0][j] = 0;
//         }
//       }
//     }
//     for (let i = 1; i < ROWS; i++) {
//       for (let j = 1; j < COLS; j++) {
//         if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//           matrix[i][j] = 0;
//         }
//       }
//     }
//
//     if (matrix[0][0] === 0) {
//       for (let j = 0; j < ROWS; j++) {
//         matrix[0][j] = 0;
//       }
//     }
//
//     if (isCol) {
//       for (let i = 0; i < COLS; i++) {
//         matrix[i][0] = 0;
//       }
//     }
//     return matrix;
//   }
//
//   console.log(matrixWithZero(matrix1)); // [[1,0,1], [0,0,0], [1,0,1]]
//   console.log(matrixWithZero(matrix2)); // [[0,0,0,0], [0, 4, 5, 0], [0, 3, 1, 0]]
// }

//Решение 15/12
// {
let john = { name: "John" };

// объект доступен, переменная john — это ссылка на него

// перепишем ссылку
john = null;

// объект будет удалён из памяти
// }
