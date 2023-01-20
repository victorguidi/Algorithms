// We will use this function to square the elements of an array and then reutrn all of then in sorted order in a non-decreasing order

// The algorithm we will use is the Counting Sort Algorithm:

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

console.log(squareSortedArray([-10000,-9999,-7,-5,0,0,10000]))

