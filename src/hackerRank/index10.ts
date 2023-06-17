"use strict";

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
  let day;
  if (year < 1918) {
    if (year % 4 === 0) {
      day = 12;
    } else {
      day = 13;
    }
  } else if (year === 1918) {
    day = 26;
  } else {
    if (year % 400 === 0) {
      day = 12;
    } else if (year % 4 === 0 && year % 100 !== 0) {
      day = 12;
    } else {
      day = 13;
    }
  }
  return `${day}.09.${year}`;
}

function main() {
  const ws: WriteStream = createWriteStream("/dev/stdin");

  const year: number = parseInt(readLine().trim(), 10);

  const result: string = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
