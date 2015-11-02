// https://leetcode.com/problems/binary-tree-right-side-view/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    resultList=[];
    markTree(root, 0);
    return resultList;
};


var resultList = [];
var markTree = function(node, deep){
  if(node) {
    resultList[deep]= node.val;
    deep++;
    if(node.left, deep) markTree(node.left, deep);
    if(node.right, deep) markTree(node.right, deep);
  }
};
