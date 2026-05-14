class Twitter {
    constructor() {
        this.followMap = new Map();
        this.tweetMap = new Map();
        this.count = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, [])
        }
        const allUserTweets = this.tweetMap.get(userId);
        allUserTweets.push([this.count++, tweetId])
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const res = [];
        const maxHeap = new MaxPriorityQueue(element => element[0]);
        // add self to followMap
        this.follow(userId, userId);

        // get all the people this person follows
        const allFollowees = this.followMap.get(userId);

        // get the most recent tweet of all the followees
        for (const followee of allFollowees) {
            // get last index of the set
            if (this.tweetMap.has(followee)) {
                const allTweets = this.tweetMap.get(followee);
                const lastIndex = allTweets.length - 1;
                const [ count, tweetId ] = allTweets[lastIndex];
                maxHeap.enqueue([count, tweetId, followee, lastIndex - 1])
            }
        }
        while (!maxHeap.isEmpty() && res.length < 10) {
            const [ count, tweetId, followee, lastIndex ] = maxHeap.dequeue();
            res.push(tweetId);
            // 'pull' the next most recent tweet from a specific user after their latest one is processed
            // get next tweet from the map
            if (lastIndex >= 0) {
                const allTweets = this.tweetMap.get(followee);
                const [nextCount, nextTweetId] = allTweets[lastIndex];
                maxHeap.enqueue([nextCount, nextTweetId, followee, lastIndex - 1])
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            // create an entry for this person
            this.followMap.set(followerId, new Set());
        }
        // now add the followeeId
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        // cannot unfollow self
        if (this.followMap.get(followerId) && followerId !== followeeId) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
