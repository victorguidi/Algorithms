import math

def radix_sort(nums):
    def get_digit_count(num):
        if num == 0:
            return 1
        return int(math.log10(num)) + 1

    def get_digit(num, digit):
        return int(abs(num) / 10 ** digit) % 10

    max_digits = 0
    for num in nums:
        max_digits = max(max_digits, get_digit_count(num))

    for i in range(max_digits):
        buckets = [[] for _ in range(10)]
        for num in nums:
            buckets[get_digit(num, i)].append(num)
        nums = [num for bucket in buckets for num in bucket]
    return nums

arr = [50, 455555, 34, 4, 2, 66, 790, 88, 9234, 10]
arr = [x*x for x in arr]

print(radix_sort(arr))
