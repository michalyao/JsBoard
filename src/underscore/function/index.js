var _ = require("underscore")
// test bind. 绑定函数到指定对象上，this。可以增加额外参数用于实现partial
var func = function(str) {
  return "hello " + this.name + str
}
console.log(func())
var person = {
  name: "world"
}
func = _.bind(func, person, " what")
console.log(func())

// partical 柯里化
var sum = function(a, b) {return a + b}

var sum5 = _.partial(sum, 5)
console.log(sum5(6)) // 11

// memoize
var cacheSum = _.memoize(sum)
console.log(cacheSum.cache)
console.log(cacheSum(5, 6))

// delay
var delay = _.delay(sum, 2000)
console.log(delay)

// defer --> stack .. throttle --> 限流

// debounce 只调用一次，指定间隔 once 只能调用一次

// after before

// wrapper aop

var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, func => {
  return "before, " + func("moe") + ", after";
});
console.log(hello());

// test negate
var list = [1, 2, 3]
console.log(_.filter(list, _.negate(el => el == 2)))

// compose 复合函数， 高阶函数