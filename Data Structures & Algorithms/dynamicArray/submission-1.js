class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(this.capacity).fill(0); // initialize with a zero
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size == this.capacity) {
            this.resize();
        }

        // insert at next empty position
        this.arr[this.size] = n;

        // don't forget to increase the length!
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        // create new array of double capacity
        this.capacity = this.capacity * 2;
        const newArr = new Array(this.capacity);

        // copy elements to new array
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }

        // set the old array to the new one
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
