// private class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  const sumDigit = l1.val + l2.val;
  if (sumDigit < 10) {
    return new ListNode(sumDigit, addTwoNumbers(l1.next, l2.next));
  } else {
    // val が 10 を超えて足し算が終了するのを防ぐために next が null のものに優先して挿入する
    if (l1.next === null) {
      l1.next = new ListNode(1, null);
    } else if (l2.next === null) {
      l2.next = new ListNode(1, null);
    } else {
      l1.next.val++;
    }
    return new ListNode(sumDigit - 10, addTwoNumbers(l1.next, l2.next));
  }
}
