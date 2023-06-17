function generate(numRows: number): number[][] {
  // 両端の要素の和が次の段の要素になるのは３段目からなので２段目までと処理を分ける
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }

  const result = [[1], [1, 1]];
  for (let i = 0; i < numRows - 2; i++) {
    const target = result[result.length - 1];
    const val = [];
    // 配列の最後の要素の場合、隣の要素が無いので1つ前まで計算する
    for (let j = 0; j < target.length - 1; j++) {
      val.push(target[j] + target[j + 1]);
    }
    val.unshift(target[0]);
    val.push(target[target.length - 1]);

    result.push(val);
  }
  return result;
}
