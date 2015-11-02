// https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 var postorderTraversal = function(root) {
     resultList=[];
     markTree(root);
     return resultList;
 };


 var resultList = [];
 var markTree = function(node){
   if(node) {
     if(node.left) markTree(node.left);
     if(node.right) markTree(node.right);
     resultList.push(node.val);
   }
 };
