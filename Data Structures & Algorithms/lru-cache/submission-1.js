class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hashMap = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.hashMap.get(key);
        if (value) {
            this.hashMap.delete(key);
            this.hashMap.set(key, value)
        }
        return value || -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // account for updating an existing key - need to first delete then set it
        this.hashMap.delete(key);
        this.hashMap.set(key, value)
        if (this.hashMap.size > this.capacity) {
            const firstKey = this.hashMap.keys().next().value;
            this.hashMap.delete(firstKey)
        }
    }
}
