// 解构交换值

arr = [3,4,2,1,5,0,7,6,9,8]

/**
 * 冒泡排序
 * @param nums {number[]}
 */
function bubbleSort(nums){
    for(let i = 0; i <nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums;
}

const a = bubbleSort(arr)

console.log(a)
