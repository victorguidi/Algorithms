### The problem

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### My Solution

I implemented a Binary search algorithm, but in the end I would have to check if the value was not found, if the number in the position middle was either greater or less then the target and then return the correct position

``` Typescript
// We are going to be using a binary search to find the index of the target value in the array.
// if the target value is not in the array, we will return the index where the target value should be inserted.
function searchInsert(nums: number[], target: number): number {

    // First things it to initialize the left and right pointer
    let left = 0;
    let right = nums.length - 1;
    let finalIndex = 0;

    // while the left pointer is less than or equal to the right pointer
    while(left <= right) {
        // set the middle pointer to the average of the left and right pointers
        const middle = Math.floor((left + right) /2);

        if(nums[middle] === target){
            return middle;
        } else if(nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        if(nums[middle] < target){
            finalIndex = middle + 1;
        } else if(nums[middle] > target && nums[middle - 1] < target){
            finalIndex = middle;
        }

    }
    return finalIndex;
}

console.log(searchInsert([1,3,5,6, 9, 10, 15, 27], 9));
```

The algorithm was correct, but there is one way we could maximize, and the solution was given by ChatGPT

### Actual Improvements that could be make

1. Instead of updating the finalIndex variable inside the while loop, you can update it after the loop has ended and return it directly. This eliminates the need for a separate variable and makes the code more concise.

2. You can remove the if(nums[middle] < target) and else if(nums[middle] > target && nums[middle - 1] < target) statements. Since you are already checking if the current middle value is less than or greater than the target, you can return the middle + 1 or middle - 1 directly depending on the condition.

3. A good practice is to add a check in case target is outside the range of the array. return 0 if target is less than the first element, and return the length of the array if target is more than the last element.

4. You can also consider making the function return -1 if the target is not present in the array, this way it's clear that the target is not in the array and it's not an index.

``` Typescript

function searchInsertImproved(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    if (target < nums[left]) return 0;
    if (target > nums[right]) return nums.length;
    while(left <= right) {
        const middle = Math.floor((left + right) /2);
        if(nums[middle] === target) return middle;
        if(nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}

console.log(searchInsertImproved([1,3,5,6, 9, 10, 15, 27], 28));
``` 