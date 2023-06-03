function strStr(haystack: string, needle: string): number {
  let target = haystack;
  for (let i = 0; i < haystack.length; i++) {
    if (target.startsWith(needle)) {
      return i;
    }
    target = target.slice(1);
  }
  return -1;
}
