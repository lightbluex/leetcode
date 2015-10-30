// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    resultList=[];
    markTree(root, 0);
};


var resultList = [];
var markTree = function(node, deep){
  if(node) {
    if(resultList[deep]) resultList[deep].next=node;
    resultList[deep]= node;
    deep++;
    if(node.left, deep) markTree(node.left, deep);
    if(node.right, deep) markTree(node.right, deep);
  }
};
