function permute(nums: number[]): number[][] {
  let subArrays = [nums.slice(0, 1)];

  // {nums[0]}をスタートに部分集合の両端と間に要素を入れて新しい部分集合を作っていく
  for (let i = 1; i < nums.length; i++) {
    const newArrays: number[][] = [];
    for (const subArray of subArrays) {
      for (let j = 0; j <= subArray.length; j++) {
        const top = subArray.slice(0, j);
        const end = subArray.slice(j);
        newArrays.push([...top, nums[i], ...end]);
      }
    }
    subArrays = newArrays;
  }
  return subArrays;
}
