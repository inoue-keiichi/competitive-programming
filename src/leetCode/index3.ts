// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
  const subArray: string[] = [];
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (!subArray.includes(s[i])) {
      subArray.push(s[i]);
      if (subArray.length > counter) {
        counter = subArray.length;
      }
    } else {
      let index = subArray.indexOf(s[i]);
      subArray.splice(0, index + 1);
      subArray.push(s[i]);
    }
  }
  return counter;
}
