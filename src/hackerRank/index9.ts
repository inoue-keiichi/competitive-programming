"use strict";

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
   * Complete the 'timeConversion' function below.
   *
   * The function is expected to return a STRING.
   * The function accepts STRING s as parameter.
   */

  function timeConversion(s: string): string {
    const ampm = s.slice(-2);
    let hour = parseInt(s.slice(0, 2));

    if (ampm == "PM" && hour !== 12) {
      hour += 12;
    }
    if (ampm == "AM" && hour === 12) {
      hour = 0;
    }
    const hourStr = hour > 9 ? `${hour}` : `0${hour}`;
    return `${hourStr}${s.slice(2, -2)}`;
  }

  function main() {
    const ws: WriteStream = createWriteStream("/dev/stdin");

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
  }
}
