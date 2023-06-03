import * as fs from "fs";

const main = (input: string) => {
  let sum = 0;
  for (let i of input) {
    sum += Number(i);
  }
  console.log(sum);
};

main(fs.readFileSync("/dev/stdin", "utf8"));
