//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    nums.forEach(item => {
        const first = nums.findIndex(
          (el1, i1) => nums.find(
            (el2, i2) => el2 + el1 === target && i2 !== i1
          )
        );
        const last = first !== -1 && nums.findIndex((item, index) => index !== first && nums[first] + item === target);
        res = [first, last];
    });
  return res;
};
