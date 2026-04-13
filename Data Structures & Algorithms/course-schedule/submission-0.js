class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build adjacency list from prereq's
        const adjList = new Map();
        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, [])
        }
        // each course points to its prerequisites
        for (const [course, prereq] of prerequisites) {
            adjList.get(course).push(prereq)
        }

        // track nodes in current dfs call with hashSet
        const visiting = new Set();

        // run DFS for each course
        for (let c = 0; c < numCourses; c++) {
            let canFinish = this.dfs(c, adjList, visiting);
            if ( canFinish === false ) {
                return false;
            }
        }
        return true;
    }

    dfs(course, adjList, visiting) {
        if (visiting.has(course)) {
            return false;
        }

        visiting.add(course)
        for (const neighbor of adjList.get(course)) {
            let canFinishCourse = this.dfs(neighbor, adjList, visiting);
            if (canFinishCourse === false) {
                return false;
            }
        }

        visiting.delete(course)
        // after successfully processing a course, clear its prereq list
        adjList.set(course, []);

        return true;
    }
}