// https://leetcode.com/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function(root) {
  resultList=[];
  markTree(root);
  return resultList;
};


var resultList = [];
var markTree = function(node){
  if(node) {
    resultList.push(node.val);
    if(node.left) markTree(node.left);
    if(node.right) markTree(node.right);
  }
};
