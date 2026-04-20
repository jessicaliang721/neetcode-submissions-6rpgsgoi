// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        let map = new Map();

        if (!head) return null;

        while (curr != null) {
            // store original node mapped to newNode
            map.set(curr, new Node(curr.val))
            curr = curr.next;
        }
        
        // curr is pointing to null; reset it to the head
        curr = head;

        while (curr != null) {
            const copy = map.get(curr);
            copy.random = map.get(curr.random) || null;
            copy.next = map.get(curr.next) || null;
            curr = curr.next;
        }

        return map.get(head); // this is mapped to the new head
    }
}
