function spiralOrder(matrix: number[][]): number[] {
  if (matrix[0].length === 0) {
    return [];
  }

  let xMin = 0;
  let xMax = matrix[0].length - 1;
  let yMin = 0;
  let yMax = matrix.length - 1;

  const result = [];

  const maxLength = matrix[0].length * matrix.length;
  while (true) {
    for (let i = xMin; i <= xMax; i++) {
      result.push(matrix[yMin][i]);
    }
    yMin++;
    if (result.length === maxLength) {
      return result;
    }

    for (let i = yMin; i <= yMax; i++) {
      result.push(matrix[i][xMax]);
    }
    xMax--;
    if (result.length === maxLength) {
      return result;
    }

    for (let i = xMax; i >= xMin; i--) {
      result.push(matrix[yMax][i]);
    }
    yMax--;
    if (result.length === maxLength) {
      return result;
    }

    console.log(result);
    for (let i = yMax; i >= yMin; i--) {
      result.push(matrix[i][xMin]);
    }
    xMin++;
    if (result.length === maxLength) {
      return result;
    }
  }
}
