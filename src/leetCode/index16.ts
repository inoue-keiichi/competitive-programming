function threeSumClosest(nums: number[], target: number): number {
  const sortedNums = nums.slice().sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      const diff = Math.abs(target - sum);

      if (sum === target) {
        return sum;
      }

      if (Math.abs(target - min) > diff) {
        min = sum;
      }

      if (target > sum) {
        left++;
      } else if (target < sum) {
        right--;
      }
    }
  }
  return min;
}
