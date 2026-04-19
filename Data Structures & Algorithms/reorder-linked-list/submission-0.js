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
     * @return {void}
     */
    reorderList(head) {
        // find the midpoint using fast and slow pointer technique
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // slow is now the midpoint
        let secondHead = slow.next;
        slow.next = null;

        // reverse L2:
        // iterate through all of the nodes of the list
        let cur = secondHead;
        let prev = null;
        while (cur) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur; // move the temp pointer along
            cur = temp; // move the cur pointer along
        }

        // prev is now the head of reversed secondList

        // merge L1 and L2
        let firstList = head;
        let secondList = prev;

        while (secondList) {
            let temp1 = firstList.next
            let temp2 = secondList.next

            firstList.next = secondList;
            secondList.next = temp1;

            firstList = temp1;
            secondList = temp2;
        }
    }
}
