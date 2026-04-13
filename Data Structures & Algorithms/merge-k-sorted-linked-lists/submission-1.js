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
        
        let results = lists[0];
        for (let i = 1; i < lists.length; i++) {
            results = this.mergeTwoLists(results, lists[i]);
        }
        return results;
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
