# Radix Sorting

This alorithm is a very elegant yet inteligent way of sorting a array of integers.

The Complexity for this algorithm is O(n) regardless of the input size.o

Radix sort is an integer sorting algorithm that sorts numbers based on the position of each digit. It does this by grouping numbers together based on the value of each digit, and then repeatedly iterating through the digits from least significant to most significant. - Description given by ChatGPT

### The Benefits

Using Radix sort is that it it doesn't really matter how big is the array or even the size of the elements inside.

An important thing to notice is that radix sort works only with integers and it is based on the number of digits of the biggest number in the array.

### How to write:

1. First, the algorithm gets the maximum number of digits in the input array so that we know how many times we need to iterate.
    - Let's say the array is [10, 5, 28, 123], this means that the variable maxNumber is 3, because the biggest number in this array has 3 digits.

2. Next, we create an empty array of "buckets" for each digit value.
    - Here we will creatte then 3 empty arrays that can hold up to 9 (0-9) positions.

3. Then, we iterate through the input array and place each number in the appropriate bucket based on the value of its least significant digit.
    - Here is what is happening, for the example array 0 is the least significat digit for 10, then 5 is for 5, then 8 is the least significant digit for 28 and so on.

4. After all the numbers have been placed in the appropriate buckets, we concatenate all the numbers in each bucket back into the input array.
    - So now what we are doing is getting the array that will be looking like this: [10, 123, 5, 28], this is the result of the concatenation.

5. We repeat steps 3 and 4 for each digit, moving from the least significant digit to the most significant digit.
    - Now with that we will be using the previous methods, and it will be looking like something like this for the next, the differenct is that is now the second more significant digit in the number, so it will happen something like this:
        1. 1 is the most significant for 10 now;
        2. 5 -> 0 will be for 5 do not have a 2 digits;
        3. The process will keep going on and the final array will look like this: [5, 10, 123, 28];
    - By now the array is almost sorted but it will do it again and again until the range of the maximum number is completed.

6. Finally, the algorithm returns the sorted array.
    - Now it will return the final array already sorted.

### Example in TS
``` Typescript
    const radixSort = (nums: number[]) => {
        // First, we need to create a helper function to get the number of digits in a given integer. We can do this using the Math.log10() function:
        const getDigitCount = (num: number) => {
            if (num === 0) return 1;
            return Math.floor(Math.log10(num)) + 1;
        }

        // Next, we'll create a helper function to get the value of a specific digit in a given integer. We can do this by using the modulus operator and some math to isolate the desired digit:
        const getDigit = (num: number, digit: number) => {
            return Math.floor(Math.abs(num) / 10 ** digit) % 10;
        }

        // Now we can start implementing the radix sort algorithm. The first step is to get the maximum number of digits in the input array so we know how many times we need to iterate. We can do this using the Math.max() function and our getDigitCount() helper function:
        let maxDigits = 0;
        for (const num of nums) {
            maxDigits = Math.max(maxDigits, getDigitCount(num));
        }

        // Next, we'll create an empty array to store our "buckets" for each digit. We'll use a nested loop to iterate through the input array and place each number in the appropriate bucket based on its digit value:
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

    console.log(radixSort([10, 5, 28, 123]))
```
