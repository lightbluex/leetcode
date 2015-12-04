// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSum = 0;
var max=[];
var rob = function(nums) {
  if(nums.length > 1){
    var nums1=nums.slice(0,-1);
    var nums2=nums.slice(1);
    var sum = robbing(nums1);
    var sum2 = robbing(nums2);
    result = sum >= sum2 ? sum : sum2;
  } else {
    result = robbing(nums);
  }
  return result;
};

var robbing = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    max[i]=0;
  }
  maxSum=0;
  next(0, nums, 0, 0);
  next(0, nums, 1, 0);
  return maxSum;
};

var max=[];
var maxSum=0;

var next = function(sum, num, current, skip) {
  sum += num[current+skip];
  current += skip;
  if(sum>=maxSum) maxSum = sum;
  if(sum<=max[current]) return false;
  max[current]=sum;
  if(current+2<num.length) next(sum, num, current, 2);
  if(current+3<num.length) next(sum, num, current, 3);
  return true;
};
