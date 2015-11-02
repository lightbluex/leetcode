// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var string = n.toString();
  var count = 0;
  var results =[];
  while(sum!=1){
    var sum = 0;
    for(i=0; i<string.length; i++){
      sum+=(parseInt(string[i]))*(parseInt(string[i]));
    }
    console.log(sum);
    string = sum.toString();
    count++;
    if(results.indexOf(sum)>=0) return false;
    results.push(sum);
  }
  return true;
};
