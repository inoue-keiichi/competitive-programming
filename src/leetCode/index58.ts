function lengthOfLastWord(s: string): number {
  const words = s.split(/\s+/g).filter((e) => e !== "");
  return words[words.length - 1].length;
}
