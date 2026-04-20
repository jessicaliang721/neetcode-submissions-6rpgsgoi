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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let dummy = new ListNode(0);
        let curr = dummy; // pointer to build the result list

        // handle the extra carry for cases like 9 + 9
        while (l1 !== null || l2 !== null || carry !== 0) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            const sum = val1 + val2 + carry;
            const remainder = sum % 10;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(remainder)
            
            // increment curr to move it to the next node
            curr = curr.next; 
            
            // increment the list pointers if they're not null
            if (l1) l1 = l1.next
            if (l2) l2 = l2.next
        }

        // return head of the list
        return dummy.next;
    }
}
