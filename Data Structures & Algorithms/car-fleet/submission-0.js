class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // we need to link position and speed
        const cars = position.map((position, i) => [position, speed[i]]);
        const fleetStack = [];
        // sort cars by position
        cars.sort((a, b) => b[0] - a[0])
        // calculate the amount of time left for each car
        for (const car of cars) {
            const timeLeft = (target-car[0])/car[1]
            console.log("timeLeft", timeLeft)
            if (fleetStack.length && timeLeft <= fleetStack.at(-1)) {
                // joins this fleet
            } else {
                fleetStack.push(timeLeft)
            }
        }
        console.log('fleetStack', fleetStack)
        return fleetStack.length;
    }
}
