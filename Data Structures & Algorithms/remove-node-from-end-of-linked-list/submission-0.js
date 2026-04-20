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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let R = head;
        let L = dummy;

        let i = 0;
        while (i < n) {
            R = R.next;
            i++;
        }

        // at this point, R should be n nodes ahead
        console.log('R', R)

        while (R !== null) {
            R = R.next;
            L = L.next;
        }

        // at this point, L is one node before the node to be removed
        console.log('L', L)
        
        // remove next node
        L.next = L.next.next;

        return dummy.next;
    }
}
