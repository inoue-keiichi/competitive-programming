function addBinary(a: string, b: string): string {
  if (a.length > b.length) {
    b = "0".repeat(a.length - b.length) + b;
  } else if (a.length < b.length) {
    a = "0".repeat(b.length - a.length) + a;
  }

  const l1 = [...a].map((val) => Number(val));
  const l2 = [...b].map((val) => Number(val));

  let carry = 0;
  const result = [];
  for (let i = l1.length - 1; i > -1; i--) {
    const sum = l1[i] + l2[i] + carry;
    carry = sum > 1 ? 1 : 0;
    result.unshift(`${sum % 2}`);
  }
  if (carry === 1) {
    result.unshift(carry);
  }
  return result.join("");
}
