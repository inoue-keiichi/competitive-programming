"use strict";
{
  process.stdin.resume();
  process.stdin.setEncoding("utf-8");

  let inputString: string = "";
  let inputLines: string[] = [];
  let currentLine: number = 0;

  process.stdin.on("data", function (inputStdin: string): void {
    inputString += inputStdin;
  });

  process.stdin.on("end", function (): void {
    inputLines = inputString.split("\n");
    inputString = "";

    main();
  });

  function readLine(): string {
    return inputLines[currentLine++];
  }

  /*
   * Complete the 'plusMinus' function below.
   *
   * The function accepts INTEGER_ARRAY arr as parameter.
   */

  function plusMinus(arr: number[]): void {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (const num of arr) {
      if (num > 0) {
        positiveCount++;
      } else if (num === 0) {
        zeroCount++;
      } else {
        negativeCount++;
      }
    }

    console.log(positiveCount / arr.length);
    console.log(negativeCount / arr.length);
    console.log(zeroCount / arr.length);
  }

  function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    plusMinus(arr);
  }
}
