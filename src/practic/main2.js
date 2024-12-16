//Решение задач 15/12
//sum of Three
{
  const array = [-1, 0, 1, 2, -1, -4];

  const threeSum = function (nums, target = 0) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 1; i < nums.length; i++) {
      let firstNum = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        let secondNum = nums[j];
        if (nums.includes(target - (firstNum + secondNum))) {
          let threeIndex = nums.indexOf(target - (firstNum + secondNum));
          if (threeIndex !== i && threeIndex !== j) {
            let threeNum = nums[threeIndex];
            res.push([firstNum, secondNum, threeNum]);
          }
        }
      }
    }
    return res;
  };

  console.log(threeSum(array));
}
