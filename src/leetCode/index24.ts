function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const second = head.next;
  // 次のペアをスワップする。返り値はペアのノードの先頭になる
  const third = swapPairs(second.next);
  second.next = head;
  head.next = third;
  return second;
}
