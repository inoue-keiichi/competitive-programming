function singleNumber(nums: number[]): number {
  const sortedNums = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i = i + 2) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      return sortedNums[i];
    }
  }
  throw Error();
}
