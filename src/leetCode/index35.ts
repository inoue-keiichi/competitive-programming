export function searchInsert(nums: number[], target: number): number {
  let minPointer = 0;
  let maxPointer = nums.length - 1;

  while (true) {
    const middlePointer = Math.floor((maxPointer + minPointer) / 2);

    if (maxPointer - minPointer <= 1) {
      if (target <= nums[minPointer]) {
        return minPointer;
      } else if (target <= nums[maxPointer]) {
        return maxPointer;
      } else {
        return maxPointer + 1;
      }
    }

    if (target < nums[middlePointer]) {
      maxPointer = middlePointer;
    } else if (target > nums[middlePointer]) {
      minPointer = middlePointer;
    } else {
      return middlePointer;
    }
  }
}
