import { TreeNode } from "./class/TreeNode";

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) {
    return result;
  } else {
    result.push(root.val);
  }
  result.unshift(...inorderTraversal(root.left));
  result.push(...inorderTraversal(root.right));
  return result;
}
