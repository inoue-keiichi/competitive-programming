("use strict");

import { WriteStream, createWriteStream } from "fs";

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
   * Complete the 'birthdayCakeCandles' function below.
   *
   * The function is expected to return an INTEGER.
   * The function accepts INTEGER_ARRAY candles as parameter.
   */

  function birthdayCakeCandles(candles: number[]): number {
    const tallest = Math.max(...candles);
    return candles.filter((val) => val === tallest).length;
  }

  function main() {
    const ws: WriteStream = createWriteStream("/dev/stdin");

    const candlesCount: number = parseInt(readLine().trim(), 10);

    const candles: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((candlesTemp) => parseInt(candlesTemp, 10));

    const result: number = birthdayCakeCandles(candles);

    ws.write(result + "\n");

    ws.end();
  }
}
