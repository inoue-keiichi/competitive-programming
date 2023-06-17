const letterMap = new Map<number, string[]>();
letterMap.set(1, []);
letterMap.set(2, ["a", "b", "c"]);
letterMap.set(3, ["d", "e", "f"]);
letterMap.set(4, ["g", "h", "i"]);
letterMap.set(5, ["j", "k", "l"]);
letterMap.set(6, ["m", "n", "o"]);
letterMap.set(7, ["p", "q", "r", "s"]);
letterMap.set(8, ["t", "u", "v"]);
letterMap.set(9, ["w", "x", "y", "z"]);

function letterCombinations(digits: string): string[] {
  const nums = digits.split("").map((val) => parseInt(val));

  if (nums.length === 0) {
    return [];
  }
  let result = letterMap.get(nums.shift()!) || [];

  for (const num of nums) {
    result = createCombinations(result, letterMap.get(num)!);
  }
  return result;
}

function createCombinations(array: string[], chars: string[]) {
  const combinations = [];
  for (const char of chars) {
    combinations.push(...array.map((val) => val + char));
  }
  return combinations;
}
