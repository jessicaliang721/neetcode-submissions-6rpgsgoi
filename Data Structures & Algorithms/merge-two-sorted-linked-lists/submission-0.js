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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode();
        let tail = dummy;


        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1; // insert to the end of our linked list, tail
                list1 = list1.next; // we need to update list1 pointer
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next // move to the next node in the merged list. When every time a new node is added, tail is set to last node
        }

        if (list1) {
            tail.next = list1;
        } else if (list2) {
            tail.next = list2;
        }

        return dummy.next; // why .next? because we want to exclude the first dummy node
    }
}
