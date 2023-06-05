function sortColors_old(nums: number[]): void {
  const arr0 = [];
  const arr1 = [];
  const arr2 = [];

  for (const num of nums) {
    if (num === 0) {
      arr0.push(num);
      continue;
    }
    if (num === 1) {
      arr1.push(num);
      continue;
    }
    if (num === 2) {
      arr2.push(num);
      continue;
    }
  }
  nums.splice(0, nums.length);
  nums.push(...arr0);
  nums.push(...arr1);
  nums.push(...arr2);
}

function sortColors(nums: number[]): void {
  let zeroPointer = 0;
  let twoPointer = nums.length - 1;
  let check = 0;

  while (check <= twoPointer) {
    // 先頭からのポインタにおいて値が0のものは入れ替えの必要なし
    if (nums[zeroPointer] === 0) {
      zeroPointer++;
      check++;
      continue;
    }

    // 後ろからのポインタにおいて値が2のものは入れ替えの必要なし
    if (nums[twoPointer] === 2) {
      twoPointer--;
      continue;
    }

    // 2だったら後ろに移動
    if (nums[check] === 2) {
      nums[check] = nums[twoPointer];
      nums[twoPointer] = 2;
      twoPointer--;
    }

    // 0だったら先頭へ移動
    if (nums[check] === 0) {
      nums[check] = nums[zeroPointer];
      nums[zeroPointer] = 0;
      zeroPointer++;
    }

    check++;
  }
}
