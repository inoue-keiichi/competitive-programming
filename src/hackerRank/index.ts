{
  ("use strict");

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
   * Complete the 'extraLongFactorials' function below.
   *
   * The function accepts INTEGER n as parameter.
   */

  function extraLongFactorials(n: number): void {
    if (n < 2) {
      console.log(1);
    }
    let carryCount = 0;
    let result = 1;
    for (let i = 2; i < n + 1; i++) {
      result = result * i;
      if (result % 10 === 0) {
        carryCount++;
        result = result / 10;
      }
    }
    console.log(`${result}` + "0".repeat(carryCount));
  }

  function main() {
    const n: number = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
  }
}
