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
    reverseList(head) { // head is the current node in the recursive call
        // base case
        if (!head) { // head is null
            return null;
        }
        let newHead = head;

        if (head.next) { // not null; can continue reversing
            newHead = this.reverseList(head.next) // if this returns something, then it is the new head
            head.next.next = head // this does the reversion; set the next node equal to head
        }

        head.next = null; // if head happens to be the first node in the list

        return newHead;
    }
}
