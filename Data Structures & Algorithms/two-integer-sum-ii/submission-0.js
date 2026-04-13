class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        let sum = numbers[i] + numbers[j];
        while (sum !== target) {
            if (sum < target) {
                i++
            } else {
                j--
            }
            sum = numbers[i] + numbers[j] // recalculate sum
        }
        console.log('sum', sum)
        return [i + 1, j + 1]
    }
}
