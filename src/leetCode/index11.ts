function maxArea(height: number[]): number {
  const sortedHeight = height.slice().sort((a, b) => b - a);
  const first = height.findIndex((e) => e === sortedHeight[0]);
  const second = height.findIndex(
    (e, index) => e === sortedHeight[1] && index !== first
  );
  const rightPoint = first < second ? first : second;
  const leftPoint = first > second ? first : second;
  let result = 0;

  for (let i = rightPoint; i > -1; i--) {
    for (let j = leftPoint; j < height.length; j++) {
      // 低い方の高さが浴槽の最大の高さとなる
      let length = height[i] < height[j] ? height[i] : height[j];
      let tmp = length * (j - i);
      console.log(tmp);
      if (result < tmp) {
        result = tmp;
      }
    }
  }
  return result;
}
