import * as fs from "fs";

const main = (input: string) => {
  const [maxNum500, maxNum100, maxNum50, sum] = input.split(/\n/).map(Number);
  let result = 0;

  for (let i = 0; i <= maxNum500; i++) {
    if (sum < i * 500) {
      break;
    }
    for (let j = 0; j <= maxNum100; j++) {
      if (sum < i * 500 + j * 100) {
        break;
      }
      for (let k = 0; k <= maxNum50; k++) {
        if (sum < i * 500 + j * 100 + k * 50) {
          break;
        }
        if (sum === i * 500 + j * 100 + k * 50) {
          result++;
        }
      }
    }
  }
  console.log(result);
};

main(fs.readFileSync("/dev/stdin", "utf8"));
