// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function(root) {
    resultList=[];
    markTree(root);
    return resultList;
};


var resultList = [];
var markTree = function(node){
  if(node) {
    if(node.left) markTree(node.left);
    resultList.push(node.val);
    if(node.right) markTree(node.right);
  }
};
