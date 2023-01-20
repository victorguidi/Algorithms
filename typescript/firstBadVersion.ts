// This algorithm will make calls to an fake api isBadVersion(version) which will return true if the version is bad and false if the version is good.
// The algorithm will return the first bad version.
// The algorithm will use a binary search to find the first bad version.

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
