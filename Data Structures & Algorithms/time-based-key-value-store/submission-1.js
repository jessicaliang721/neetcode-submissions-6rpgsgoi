class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp, value]);
        // Results in: [[1, "happy"], [2, "mad"], [3, "sad"]]
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // target == timestamp
        const allTimestamps = this.keyStore.get(key);
        console.log('allTimestamps', allTimestamps);
        if (!allTimestamps) return "";
        let l = 0;
        let r = allTimestamps.length - 1;
        let res = ""; // need to store result so you can find the last existing timestamp
        
        while (l <= r) {
            const mid = Math.floor((l + r)/2);
            const midTimestamp = allTimestamps[mid][0];

            // compare target to the timestamp at mid
            if (timestamp < midTimestamp) {
                // toss out right half
                r = mid - 1;
            } else {
                // toss out left half
                res = allTimestamps[mid][1];
                l = mid + 1;
            }
        }
        return res;
    }
}
