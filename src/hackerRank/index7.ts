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
   * Complete the 'miniMaxSum' function below.
   *
   * The function accepts INTEGER_ARRAY arr as parameter.
   */

  function miniMaxSum(arr: number[]): void {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const result = [];
    result.push(
      sortedArr.reduce((sum, val, index) => {
        if (index === arr.length - 1) {
          return sum;
        }
        return (sum += val);
      }, 0)
    );
    result.push(
      sortedArr.reduce((sum, val, index) => {
        if (index === 0) {
          return sum;
        }
        return (sum += val);
      }, 0)
    );

    console.log(result.join(" "));
  }

  function main() {
    const arr: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    miniMaxSum(arr);
  }
}
