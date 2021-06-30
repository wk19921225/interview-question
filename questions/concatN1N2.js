// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// 输出: [1,2,2,3,5,6]

nums1 = [1,2,4,0,0,0]
nums2 = [2,5,6]

/**
 *
 * @param num1 {number[]}
 * @param m {number}
 * @param num2 {number[]}
 * @param n {number}
 */
function mergeNum(num1, m, num2, n) {
    let subLen1 = m - 1,
        subLen2 = n - 1,
        subLen = m + n - 1;

    while ( subLen2 >= 0 ) {
        if (subLen1 < 0) {
            num1[subLen--] = num2[subLen2--]
            continue;
        }
        num1[subLen--] = num1[subLen1] > num2[subLen2] ? num1[subLen1--] : num2[subLen2--];
    }
    return num1;
}

const n = mergeNum(nums1, 3, nums2, 3)

console.log(n)

