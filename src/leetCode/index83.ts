function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;
  while (node?.next) {
    if (node.val !== node.next.val) {
      node = node.next;
      continue;
    }
    // 次のNodeの値と同じなら次のNodeを削除
    node.next = node.next.next;
  }
  return head;
}
