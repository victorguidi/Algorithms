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

// Improved Version - By chatGPT

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