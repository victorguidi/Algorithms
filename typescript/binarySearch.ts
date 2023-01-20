// this function will be a binary search algorithm

// In order for this algortihm to work, the array must be sorted

function binarySearch(nums: Array<number>, target: number): number {

    // second thing is not to initialize the left and right pointers
    let left = 0;
    let right = nums.length -1;

    // now we will start the loop
    // the loop will run until left is less than or equal to right
    while (left <= right){
        const mid = left + Math.floor((right - left) / 2);

        // validate if the mid element is indeed the element we are looking for
        if(nums[mid] === target){
            return mid;

        // validate if mid is less than target, if it is we will move the left pointer to the right by one
        } else if(nums[mid] < target){
            left = mid +1;
    
        // validate if mid is greater than target, if it is we will move the right pointer to the left by one
        } else {
            right = mid -1;
        }
    }
    return -1;
}

const array = [1, 7, 9, 13, 45, 56, 57, 89, 91, 100];
console.log(binarySearch(array, 57));