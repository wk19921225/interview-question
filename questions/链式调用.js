// 错误  不可以写箭头函数
// Number.prototype.add = (num) => {
//     return this + num;
// }
//
// Number.prototype.sub = (num) => {
//     return this - num;
// }

// Number.prototype.add = function (num) {
//     return this + num;
// }
//
// Number.prototype.sub = function (num) {
//     return this - num;
// }
//
// console.log((5).add(3).sub(2))


/**---------设计一个链式调用类-------------**/
// 实现一个LazyMan，可以按照以下方式调用:
//     LazyMan(“Hank”)输出:
//     Hi! This is Hank!
//
//     LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
//     Wake up after 10
// Eat dinner~
//
//     LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
//     Eat dinner~
//     Eat supper~
//
//     LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
//     Eat supper
// 以此类推。

class LazyMan{
    constructor(name) {
        this.name = name;
        this.queue = [() => {
            console.log(`hi, im ${this.name}`);
            this.next();
        }];
        setTimeout(() => this.next(), 0)
    }

    eat(food) {
        const fn = () => {
            console.log(`eat ${food}`);
            this.next()
        }
        this.queue.push(fn);
        return this;
    }

    sleep(time) {
        const fn = () => {
            console.log(`sleep ${time}`)
            setTimeout(() => {
                this.next();
            }, time);
        }
        this.queue.push(fn)
        return this;
    }

    sleepFirst(time){
        const fn = () => {
            console.log(`sleepFirst ${time}`)
            setTimeout(() => {
                this.next();
            }, time);
        }
        this.queue.unshift(fn)
        return this;
    }

    next() {
        const fn = this.queue.shift();
        fn && fn();
    }
}

const lazyMan = new LazyMan("avc");

lazyMan.eat("f").sleep(3000).eat("a").sleepFirst(4000);
