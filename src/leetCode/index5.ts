function longestPalindrome(s: string): string {
  let result = s[0];
  // まず偶数個で見ていく
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; i - j > -1 && j + i + 1 < s.length; j++) {
      if (s[i - j] !== s[i + j + 1]) {
        break;
      }
      if (result.length < (j + 1) * 2) {
        result = s.slice(i - j, i + 1 + j + 1);
      }
    }
  }

  // 両隣が同じ文字か確認していく
  for (let i = 1; i < s.length - 1; i++) {
    for (let j = 1; i - j > -1 && j + i < s.length; j++) {
      if (s[i - j] !== s[i + j]) {
        break;
      }
      if (result.length < j * 2 + 1) {
        result = s.slice(i - j, i + j + 1);
      }
    }
  }
  return result;
}
