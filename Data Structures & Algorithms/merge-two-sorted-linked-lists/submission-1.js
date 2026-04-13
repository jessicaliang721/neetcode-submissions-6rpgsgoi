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
        // dummy node to start with:
        const dummyNode = { val: 0, next: null }
        let dummyPointer = dummyNode;
        let l1 = list1;
        let l2 = list2;
        while (l1 && l2) {
            // compare the value of l1 and l2
            if (l1.val === l2.val || l1.val < l2.val) {
                dummyPointer.next = l1
                l1 = l1.next;
            } else {
                dummyPointer.next = l2;
                l2 = l2.next;
            }
            dummyPointer = dummyPointer.next;
        }

        // corner cases for when either list is empty
        if (l1) {
            dummyPointer.next = l1;
        } else {
            dummyPointer.next = l2;
        }
        console.log('dummyPointer', dummyPointer)
        console.log('dummyNode', dummyNode)
        // we want to return dummyNode.next because the first node is something we made up. Irrelevant.
        return dummyNode.next;
    }
}
