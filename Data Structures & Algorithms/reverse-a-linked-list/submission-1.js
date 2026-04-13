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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        console.log('head', head);
        let prev = null;
        let cur = head;
        while (cur != null) {
            // save the next node in a temp variable so we don't lose the rest of the linked list
            let next = cur.next;

            // swap the pointers
            cur.next = prev

            // move prev and curr pointers forward
            prev = cur;
            cur = next;
        }

        // return new head, which is now prev after moving it forward to the end
        return prev
    }
}
