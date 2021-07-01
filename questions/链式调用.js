// 错误  不可以写箭头函数
// Number.prototype.add = (num) => {
//     return this + num;
// }
//
// Number.prototype.sub = (num) => {
//     return this - num;
// }

Number.prototype.add = function (num) {
    return this + num;
}

Number.prototype.sub = function (num) {
    return this - num;
}

console.log((5).add(3).sub(2))
