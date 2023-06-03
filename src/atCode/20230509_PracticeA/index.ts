import * as fs from "fs";

const main = (input: string) => {
  const list = input.split(/\n/).flatMap((e) => e.split(/\s/));
  console.log(
    `${Number(list[0]) + Number(list[1]) + Number(list[2])} ${list[3]}`
  );
};

main(fs.readFileSync("/dev/stdin", "utf8"));
