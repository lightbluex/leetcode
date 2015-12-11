// https://leetcode.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var min = 0;

var ladderLength = function(beginWord, endWord, wordList) {
  var lenDict = {};

};

var count = function(word, endWord, wordList, len){
  len++;
  if(wordList.size()===0) return false;
  if(close(word,endWord)) return len;
};

var close = function(str1, str2){
  var diff = 0;
  for (var i = 0; i < str1.length; i++) {
    if(str1[i]!=str2[i]) diff++;
  }
  if(diff==1) return true;
  return false;
};

var pushLen = function(len){
  min = min!==0&&len<min ? len : min;
};

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add("some text");
// console.log(mySet.has(1));
// console.log(mySet.keys());
console.log(close("hip","hot"));
