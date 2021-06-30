const arr = [1, 2, [2, 4, 3, 5], [[3], [6, 8]], 9]

// 递归需要使用 传递形参变量暂存

// every 返回boolean

//reduce 每个迭代需要返回新值 用于累加

// sort 默认 a < b， a在b之前 默认升序

/**
 * 递归实现
 * @param arr
 * @param result
 * @returns {*[]}
 */
function flatten(arr, result=[]) {
    let r = result
    arr.forEach(item => {
        if(Array.isArray(item)){
            r = flatten(item, r)
        } else {
            r.push(item)
        }
    })
    return r
}

/**---------------------------------**/

/**
 *  reduce
 * @param arr {Array}
 */
function flatten(arr) {
    if (arr.every(item => !Array.isArray(item))) {
        return arr;
    }

    return arr.reduce((pre, cur) =>
        Array.isArray(cur)
            ? [].concat(pre, flatten(cur))
            : [].concat(pre, cur)
    , [])
}

const deDuplication = (arr) => Array.from(new Set(arr))

const arrFaltten = flatten(arr)
const arrUni = deDuplication(arrFaltten)
const arrSort = (arrUni).sort((pre, next) => pre - next)

console.log(arrSort)
/**---------------------------------**/
// 函数式
// 扁平化
const flattenDeep = (array) => array.flat(Infinity)

// 去重
const unique = (array) => Array.from(new Set(array))

// 排序
const sort = (array) => array.sort((a, b) => a-b)

// 函数组合
const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)

// 组合后函数
const flatten_unique_sort = compose( sort, unique, flattenDeep)

// 测试
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log(flatten_unique_sort(arr))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
