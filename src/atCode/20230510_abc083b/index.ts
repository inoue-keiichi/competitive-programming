import * as fs from "fs";

const main = (input: string) => {
  const [num, min, max] = input.split(/\s/).map(Number);

  let result = 0;
  for (let i = 1; i < num + 1; i++) {
    const sum = splitToDigits(i).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (min <= sum && max >= sum) {
      result += i;
    }
  }
  console.log(result);
};

const splitToDigits = (num: number) => {
  const result = [];
  let i = 0;
  while (num >= Math.pow(10, i)) {
    result.push(Math.floor(num / Math.pow(10, i)) % 10);
    i++;
  }
  return result;
};

main(fs.readFileSync("/dev/stdin", "utf8"));
