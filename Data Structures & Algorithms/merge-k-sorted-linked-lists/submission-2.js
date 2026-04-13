/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        // merging lists two at a time

        while (lists.length > 1) { // keeps running until there's only one merged list left
            let mergedLists = [];
            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;
                mergedLists.push(this.mergeTwoLists(l1, l2)) // stores the merged lists at the current level
            }
            lists = mergedLists;
        }
        return lists[0];
    }

    mergeTwoLists(listA, listB) {
        let head = new ListNode(); // dummy head
        let tail = head;

        // two pointers to point at each list
        let i = listA;
        let j = listB;

        while (i != null && j != null) {
            if (i.val < j.val) {
                tail.next = i;
                i = i.next;
            } else {
                tail.next = j;
                j = j.next;
            }
            tail = tail.next; // move the tail forward
        }

        // one of the halves will have elements remaining
        if (i != null) {
            tail.next = i;
        } else {
            tail.next = j;
        }

        return head.next; // excludes dummy head
    }
}
