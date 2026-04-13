class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        // Init the list with 'dummy' head and tail nodes
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);

        // Connect dummy head and tail nodes
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value) {
        // we are inserting it right before the dummy tail
        const newNode = new ListNode(value);

        // link new node to other nodes
        newNode.next = this.tail;
        newNode.prev = this.tail.prev;

        // link other nodes to new node - ORDER MATTERS
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new ListNode(value);

        // link new node to other nodes
        newNode.prev = this.head;
        newNode.next = this.head.next;

        // link other nodes to new node - ORDER MATTERS
        this.head.next.prev = newNode; 
        this.head.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        } else {
            const targetNode = this.tail.prev;
            const value = targetNode.value;
            const prevNode = targetNode.prev;
            prevNode.next = this.tail;
            this.tail.prev = prevNode;
            return value;
        }
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        } else {
            const targetNode = this.head.next;
            const value = targetNode.value;
            const nextNode = targetNode.next;
            this.head.next = nextNode;
            nextNode.prev = this.head;
            return value;
        }
        
    }
}
