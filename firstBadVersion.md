# LeetCode problem 278. First Bad Version

This problem uses an implementantion of Binary search in order to solve the problem:

### The problem it self

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

### Example:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

### My implementantion:

``````
function firstBadVersion(n: number): number {
    //first thing is to set the left and right pointers
    let left = 1;
    let right = n;

    // while the left pointer is less than the right pointer
    while(left < right){
        // set the middle pointer to the average of the left and right pointers
        let middle = Math.floor((left + right) / 2);
        // if the middle pointer is a bad version
        if(isbadVersion(middle)){
            // set the right pointer to the middle pointer
            console.log("bad version: " + middle)
            right = middle;
        } else {
            // set the left pointer to the middle pointer
            console.log("good version: " + middle)
            left = middle + 1;
        }
        // if(Math.abs(left - middle) == 1){
        //     return middle;
        // }
    }

    // return the left pointer
    return left;
}

function isbadVersion(version: number): boolean {
    let bad = 2;
    if(version >= bad){
        return true;
    }else{
        return false;
    }
}

console.log(firstBadVersion(3));
``````

In this case since we are not actually calling an API there is not problem, so if this is a functionon way it can be optimized is this, recommend by ChatGPT

One way is to replace the isbadVersion function with a callback function that is passed as an argument to the firstBadVersion function, so that the check for bad version can be done in the calling code and the firstBadVersion function can be reused for different sets of bad versions.
Another way is to change the while loop to a recursive call. Instead of using while loop you can call the firstBadVersion function recursively with updated left and right pointers. This will save some memory and make the code more readable.
You can also remove the console.log statements, they are not needed after you have debugged the function.
And you can also use bitwise operator instead of Math.floor, it's faster.

``````
function firstBadVersion(n: number, isBad: (version: number) => boolean): number {
    let left = 1;
    let right = n;
    while(left < right){
        let middle = (left + right) >> 1;
        if(isBad(middle)){
            right = middle;
        }else{
            left = middle + 1;
        }
    }
    return left;
}

let bad = 9
let firstBad = firstBadVersion(10, (version: number) => version >= bad)
console.log(firstBad)

``````

In the case we were actually calling an api we would have to return a promise in the function, but also make sure to cache, otherwise we would call to many times the API.

``````
async function firstBadVersion(n: number): Promise<number> {
    let left = 1;
    let right = n;
    while(left < right){
        let middle = Math.floor((left + right) / 2);
        let isBad = await isBadVersion(middle);
        if(isBad){
            right = middle;
        }else{
            left = middle + 1;
        }
    }
    return left;
}

async function isBadVersion(version: number): Promise<boolean> {
    try {
        let response = await axios.get(`https://example.com/api/badversion/${version}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
``````

Finally, we can also rewrite this function using recursion, but it's important to note that this recursive solution will consume more memory than the iterative solution for large inputs, because each recursive call adds a new function call to the call stack.
Also, you should be careful with the number of recursion calls you make, you might end up hitting the maximum call stack size.

``````
async function firstBadVersion(n: number, left: number = 1, right: number = n): Promise<number> {
    let middle = Math.floor((left + right) / 2);
    let isBad = await isBadVersion(middle);

    if(left >= right) {
        return left;
    }
    else if(isBad) {
        return firstBadVersion(n, left, middle);
    } else {
        return firstBadVersion(n, middle+1, right);
    }
}

async function isBadVersion(version: number): Promise<boolean> {
    try {
        let response = await axios.get(`https://example.com/api/badversion/${version}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

let firstBad = await firstBadVersion(10);
console.log(firstBad);
``````

As you can see, the firstBadVersion function now takes an additional left and right parameters, which are used to keep track of the range of versions being searched. The base case for the recursion is when left is greater than or equal to right, in this case the function returns left.
Otherwise, it calls itself with updated left and right values, which are either the middle or middle+1 depending on whether the middle version is bad or not.
