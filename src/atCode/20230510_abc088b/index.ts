import * as fs from "fs";

const main = (input: string) => {
  const cardNums = input
    .split(/\n/)[1]
    .split(/\s/)
    .map(Number)
    .sort((a, b) => b - a);

  const result = cardNums.reduce(
    (previousValue: number, currentValue: number, currentIndex: number) => {
      if (currentIndex % 2 === 0) {
        return previousValue + currentValue;
      }
      return previousValue - currentValue;
    },
    0
  );
  console.log(result);
};

main(fs.readFileSync("/dev/stdin", "utf8"));
