import * as fs from "fs";

const main = (input: string) => {
  const [count, otoshidama] = input.split(/\s/).map(Number);

  for (let x = count; x > -1; x--) {
    for (let y = count - x; y > -1; y--) {
      const z = count - x - y;
      if (10000 * x + 5000 * y + 1000 * z === otoshidama) {
        return console.log([x, y, z].join(" "));
      }
    }
  }
  return console.log([-1, -1, -1].join(" "));
};

main(fs.readFileSync("/dev/stdin", "utf8"));
