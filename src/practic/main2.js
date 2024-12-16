//Решение задач 15/12
//sum of Three
{
  const array = [-1, 0, 1, 2, -1, -4];

  // const threeSum = function (nums, target = 0) {
  //   const res = [];
  //
  //   if (nums.length < 3) return res;
  //
  //   nums = nums.sort((a, b) => a - b);
  //
  //   for (let i = 1; i < nums.length - 2; i++) {
  //     if (nums[i] > target) {
  //       break;
  //     }
  //
  //     if (i > 0 && nums[i] === nums[i - 1]) {
  //       continue;
  //     }
  //
  //     let j = i + 1;
  //     let k = nums.length - 1;
  //     while (j < k) {
  //       let sum = nums[i] + nums[j] + nums[k];
  //       if (sum === target) {
  //         res.push([nums[i], nums[j], nums[k]]);
  //
  //         while (nums[j] === nums[j + 1]) j++;
  //         while (nums[j] === nums[j + 1]) k++;
  //
  //         j++;
  //         k--;
  //         continue;
  //       }
  //       if (sum < target) {
  //         j++;
  //         continue;
  //       }
  //       if (sum > target) {
  //         k--;
  //         continue;
  //       }
  //     }
  //   }
  //   return res;
  // };

  const threeSum = function (nums, target = 0) {
    let res = [];

    nums = nums.sort((a, b) => a - b);

    if (nums.length < 3) return res;

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[k]]);

          while (nums[j] === nums[j + 1]) j++;
          while (nums[k] === nums[k - 1]) k--;

          j++;
          k--;
          continue;
        }

        if (sum < target) {
          j++;
          continue;
        }

        if (sum > target) {
          k--;
          continue;
        }
      }
    }

    return res;
  };

  console.log(threeSum(array));
}
