import * as fs from "fs";

const main = (input: string) => {
  const mochies = input
    .split(/\n/)
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  let result = 0;
  let upperMochi = 0;
  for (let mochi of mochies) {
    if (upperMochi < mochi) {
      result++;
      upperMochi = mochi;
    }
  }

  console.log(result);
};

main(fs.readFileSync("/dev/stdin", "utf8"));
