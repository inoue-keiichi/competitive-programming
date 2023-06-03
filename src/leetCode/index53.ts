// カダネのアルゴリズム

function maxSubArray(nums: number[]): number {
  let currentSum = 0;
  let result = nums[0];

  for (const num of nums) {
    // 一つ前の最大の部分和に要素を加えたもの or 現在の要素のどちらか大きい方が最大の部分和候補
    currentSum = Math.max(num, currentSum + num);
    // 今までの最大の部分和とどちらが大きいか比べる
    result = Math.max(currentSum, result);
  }

  return result;
}
