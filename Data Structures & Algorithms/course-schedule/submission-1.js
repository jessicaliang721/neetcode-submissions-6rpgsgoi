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

        // track nodes in current dfs (one course at a time) call with hashSet
        const visiting = new Set();

        // run DFS for each course
        for (let c = 0; c < numCourses; c++) {
            let canFinish = this.dfs(c, adjList, visiting);
            if ( canFinish === false ) {
                return false;
            }
        }

        // if all courses are processed without cycles, return true
        return true;
    }

    dfs(course, adjList, visiting) {
        // this detects the cycle
        if (visiting.has(course)) {
            return false;
        }
        // shortcut to avoid more work; no prereqs so it can be completed
        if (adjList.get(course) === []) {
            return true;
        }

        visiting.add(course)
        for (const neighbor of adjList.get(course)) {
            let canFinishCourse = this.dfs(neighbor, adjList, visiting);
            if (canFinishCourse === false) {
                return false;
            }
        }
        // finished visiting the current course
        visiting.delete(course)

        // after successfully processing a course, clear its prereq list to mark it as done
        adjList.set(course, []);

        return true;
    }
}