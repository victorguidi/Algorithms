function sortedSquares(nums: number[]): number[] {

    // The first thing is to find the square of each element in the array
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }

    const radixSort = (nums: number[]) => {
        // First, we need to create a helper function to get the number of digits in a given integer.
        // We can do this using the Math.log10() function:
        const getDigitCount = (num: number) => {
            if (num === 0) return 1;
            return Math.floor(Math.log10(num)) + 1;
        }

        // Next, we'll create a helper function to get the value of a specific digit in a given integer.
        // We can do this by using the modulus operator and some math to isolate the desired digit:
        const getDigit = (num: number, digit: number) => {
            return Math.floor(Math.abs(num) / 10 ** digit) % 10;
        }

        // Now we can start implementing the radix sort algorithm.
        // The first step is to get the maximum number of digits in the input array so we know how many times we need to iterate. 
        // We can do this using the Math.max() function and our getDigitCount() helper function:
        let maxDigits = 0;
        for (const num of nums) {
            maxDigits = Math.max(maxDigits, getDigitCount(num));
        }

        // Next, we'll create an empty array to store our "buckets" for each digit.
        // We'll use a nested loop to iterate through the input array and place each number in the appropriate bucket based on its digit value:
        for (let i = 0; i < maxDigits; i++) {
            const buckets: any[] = Array.from({length: 10}, () => []);
            for (const num of nums) {
                buckets[getDigit(num, i)].push(num);
            }

            // After all the numbers have been placed in the appropriate buckets, we'll concatenate all the numbers in each bucket back into the input array:
            nums = [].concat(...buckets);
        }
        return nums;
    }
    return radixSort(nums)

};
// test the function radixSort
console.log(sortedSquares([50, 455555, 34, 4, 2, 66, 790, 88, 9234, 10]));
// console.log(sortedSquares([-7,-3,2,3,11]))