import * as fs from "fs";

const main = (input: string) => {
  const lines = input.split(/\n/);
  let nums = lines[1].split(/\s/).map(Number);
  let result = 0;
  while (true) {
    if (nums.some((n) => n % 2 === 1)) {
      break;
    }
    nums = nums.map((n) => n / 2);
    result++;
  }
  console.log(result);
};

main(fs.readFileSync("/dev/stdin", "utf8"));
