import * as fs from "fs";

const main = (input: string) => {
  let target: string = String(input).trim();
  while (true) {
    const result = search(target);
    if (result.result !== "CONTINUE") {
      return console.log(result.result);
    }
    target = result.next;
  }
};

const search = (target: string) => {
  const tokens = ["dreamer", "dream", "erase", "eraser"];
  if (tokens.includes(target)) {
    return { result: "YES" as const };
  }
  for (let token of tokens) {
    if (target.startsWith(token)) {
      const tmpNext = target.substring(token.length);
      if (tmpNext.search(/^(dream|erase)/) !== -1) {
        return { result: "CONTINUE" as const, next: tmpNext };
      }
    }
  }
  return { result: "NO" as const };
};

main(fs.readFileSync("/dev/stdin", "utf8"));
