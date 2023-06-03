function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  let table: number[][] = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));
  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        table[i][j] = 1 + table[i - 1][j - 1];
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }
  return table[nums1.length][nums2.length];
}
