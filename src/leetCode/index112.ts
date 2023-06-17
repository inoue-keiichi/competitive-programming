import { TreeNode } from "./class/TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.right && !root.left && root.val === targetSum) {
    return true;
  }

  return (
    hasPathSum(root.right, targetSum - root.val) ||
    hasPathSum(root.left, targetSum - root.val)
  );
}
