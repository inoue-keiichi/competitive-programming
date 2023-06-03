function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  const list = [1, 2];
  for (let i = 2; i < n; i++) {
    list.push(list[i - 1] + list[i - 2]);
  }
  return list[n - 1];
}
