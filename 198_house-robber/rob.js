// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  next(0, nums, 0, 0);
  next(0, nums, 1, 0);
  return max;
};

var max=0;

var next = function(sum, num, current, skip) {
  sum += num[current+skip];
  current += skip;
  if(sum>max) max = sum;
  if(current+2<num.length) next(sum, num, current, 2);
  if(current+3<num.length) next(sum, num, current, 3);
};
