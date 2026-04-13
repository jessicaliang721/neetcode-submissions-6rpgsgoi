class ListNode {
    constructor(value, nextNode = null) { // creating a single linked list
        this.value = value;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1); // dummy node to handle edge cases. Any default val could've been used
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next; // start one more after the dummy node
        let i = 0; // 0-indexed start
        while (curr) { // while curr is not null
            if (i === index) return curr.value; // found a match
            i++; // increment our pointers
            curr = curr.next;
        }
        return -1; // index out of bounds
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val); // convert val to a ListNode

        // what happens to the current head?
        newNode.next = this.head.next; // set the new node's pointer to the dummy node's head pointer
        this.head.next = newNode; // this sets newNode to be the new head of the list
        
        // what happens to the tail?
        if (!newNode.next) {
            // if list was previously empty, then the tail needs to be updated to the new head
            this.tail = newNode;
        }
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new ListNode(val);
        this.tail.next = newNode;
        this.tail = this.tail.next; // which is effectively also newNode
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        // I need to find both the target node and the one before it in order to set the Before Node to the one after Target
        let i = 0;
        let curr = this.head; // this is a reference to the "Before" node

        // move curr to the node BEFORE target node
        while (i < index && curr) { // curr needs to exist (be non-null) to remain in bounds
            i++;
            curr = curr.next; // shift our pointer
        }

        // now we can do the deletion by setting the Before Node pointer to the one after Target
        if (curr && curr.next) { // both the node Before Target and Target node exist
            // what if we deleted the last node in the list? what happens to tail?
            if (curr.next === this.tail) {
                this.tail = curr; // set tail to the Before Node
            }
            curr.next = curr.next.next;
            return true;
        }
        return false; // index out of bounds
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const arr = [];
        // iterate through the linked list and push values into an array
        let curr = this.head.next; // exclude dummy variable
        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }
}
