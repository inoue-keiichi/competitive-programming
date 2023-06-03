function romanToInt(s: string): number {
  const array = [...s];

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const romanNum = array[i];
    const nextRomanNum = array[i + 1];
    if (romanNum === "I" && nextRomanNum === "V") {
      sum += 4;
      i++;
      continue;
    }
    if (romanNum === "I" && nextRomanNum === "X") {
      sum += 9;
      i++;
      continue;
    }
    if (romanNum === "X" && nextRomanNum === "L") {
      sum += 40;
      i++;
      continue;
    }
    if (romanNum === "X" && nextRomanNum === "C") {
      sum += 90;
      i++;
      continue;
    }
    if (romanNum === "C" && nextRomanNum === "D") {
      sum += 400;
      i++;
      continue;
    }
    if (romanNum === "C" && nextRomanNum === "M") {
      sum += 900;
      i++;
      continue;
    }
    if (romanNum === "I") {
      sum += 1;
      continue;
    }
    if (romanNum === "V") {
      sum += 5;
      continue;
    }
    if (romanNum === "X") {
      sum += 10;
      continue;
    }
    if (romanNum === "L") {
      sum += 50;
      continue;
    }
    if (romanNum === "C") {
      sum += 100;
      continue;
    }
    if (romanNum === "D") {
      sum += 500;
      continue;
    }
    if (romanNum === "M") {
      sum += 1000;
      continue;
    }
  }
  return sum;
}
