import * as fs from "fs";

const main = (input: string) => {
  const nums = input.split(/\s/).map((e) => Number(e));
  console.log((nums[0] * nums[1]) % 2 === 0 ? "Even" : "Odd");
};

main(fs.readFileSync("/dev/stdin", "utf8"));
