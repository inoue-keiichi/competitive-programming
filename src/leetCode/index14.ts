// Longest Common Prefix

function longestCommonPrefix_old(strs: string[]): string {
  const [minLengthStr, ...others] = strs
    .slice()
    .sort((a, b) => a.length - b.length);

  const commonPrefixCharArray: string[] = [];
  for (let i = 0; i < minLengthStr.length; i++) {
    if (others.some((str) => str[i] !== minLengthStr[i])) {
      break;
    }
    commonPrefixCharArray.push(minLengthStr[i]);
  }
  return commonPrefixCharArray.join("");
}

function longestCommonPrefix(strs: string[]): string {
  const [minLengthStr, ...others] = strs
    .slice()
    .sort((a, b) => a.length - b.length);

  let result = minLengthStr;
  for (let i = 0; i < minLengthStr.length; i++) {
    if (others.every((str) => str.startsWith(result))) {
      return result;
    }
    result = result.slice(0, -1);
  }
  return result;
}
