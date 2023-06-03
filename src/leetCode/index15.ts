function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 同じ解が出るのでスキップ
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[right], nums[left]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++; // 同じ解が出るのでスキップ
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--; // 同じ解が出るのでスキップ
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
