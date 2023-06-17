import { TreeNode } from "./class/TreeNode";

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  return pathSumInternal(root, targetSum, []).filter((path) => path.length > 0);
}

function pathSumInternal(
  root: TreeNode | null,
  targetSum: number,
  path: number[]
): number[][] {
  // パス終了
  if (!root && targetSum === 0) {
    return [path];
  } else if (!root) {
    return [];
  }
  if (!root.right && !root.left && root.val === targetSum) {
    return [[...path, root.val]];
  }

  const newPath = [...path, root.val];
  const result = [];
  if (root.right) {
    const rightPaths = pathSumInternal(
      root.right,
      targetSum - root.val,
      newPath
    );
    if (rightPaths.length > 0) {
      result.push(...rightPaths);
    }
  }
  if (root.left) {
    const leftPaths = pathSumInternal(root.left, targetSum - root.val, newPath);
    if (leftPaths.length > 0) {
      result.push(...leftPaths);
    }
  }
  return result;
}
