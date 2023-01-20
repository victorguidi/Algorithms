# The Counting Sort Algorithm

Counting sort is an efficient, non-comparison based sorting algorithm that is particularly well-suited for sorting small integers. It works by counting the number of occurrences of each element in the input array, and then using that information to place each element in its correct sorted position in the output array.

Here is a step-by-step explanation of how the algorithm works:

1. Create a counting array counts of size k, where k is the maximum value in the input array. Initialize all elements of the array to 0.

2. Iterate through the input array, counting the number of occurrences of each element by incrementing the corresponding element in the counts array.

3. Iterate through the counts array, summing up the counts in each element to get the position of each element in the output array.

4. Return the output array as the sorted result.

One thing to keep in mind is that counting sort is not a general-purpose sorting algorithm, it only works well when the input numbers are in a small range, otherwise the space complexity will be too big. Also, it is not stable, meaning that equal elements in the input array may not retain their relative order in the output array. It's usually used as a subroutine in other sorting algorithm like radix sort, which is a general-purpose sorting algorithm that uses counting sort as a subroutine to sort elements based on their individual digits.

### Example:

``` Typescript
function squareSortedArray(arr: number[]): number[]{

    // First thing we do is to find the square of each element in the array
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }

    // Now we will sort the array
    // Create a counting array counts of size k, where k is the maximum value in the input array. Initialize all elements of the array to 0.
    let counts = new Array(Math.max(...arr)+1).fill(0)

    // Iterate through the input array, counting the number of occurrences of each element by incrementing the corresponding element in the counts array.
    for(let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }

    // Iterate through the counts array, summing up the counts in each element to get the position of each element in the output array.
    let sorted = 0;
    for(let i = 0; i < counts.length; i++) {
        while(counts[i] > 0) {
            arr[sorted] = i;
            sorted++;
            counts[i]--;
        }
    }

    // Return the output array as the sorted result.
    return arr
}


console.log(squareSortedArray([-110,-50,-7,-5,0,7,10]))

// An example of bad array to be used with this algorithm, since the range of the numbers are too big.
console.log(squareSortedArray([-10000,-9999,-7,-5,0,0,10000]))
```