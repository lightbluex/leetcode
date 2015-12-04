// https://leetcode.com/problems/shortest-palindrome/
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  var r = reverse(s);
  console.log(r);
  for (var i = 0; i <= s.length; i++) {
    commonR = r.slice(i);
    commonS = s.slice(0,s.length-i);
    if(commonR == commonS) break;
  }
  console.log(i);
  result = [r.slice(0,i), s].join("");
  return result;
};

var reverse = function(s){
  var r=[];
  for (var i = 0; i < s.length; i++) {
    r[i] = s[s.length-i-1];
  }
  return r.join("");
};
