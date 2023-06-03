function containsDuplicate(nums: number[]): boolean {
  const sortedNum = nums.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedNum.length; i++) {
    if (sortedNum[i] === sortedNum[i + 1]) {
      return true;
    }
  }
  return false;
}
