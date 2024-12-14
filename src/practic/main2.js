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
{
  const input = [4, 1, 2, 1, 2];

  // function singleCode(nums) {
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     debugger;
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) {
  //         nums.splice(i, 1);
  //         nums.splice(j - i, 1);
  //         i--;
  //         j--;
  //       }
  //     }
  //   }
  //   return nums;
  // }

  function singleCode(nums) {
    let uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for (let i = 0; i < nums.length; i++) {
      debugger;
      const current = nums[i];

      if (!uniq.has(current)) {
        uniq.add(current);
        uniqSum += current;
      }
      numSum += current;
    }
    return uniqSum * 2 - numSum;
  }
  console.log(singleCode(input));
}
