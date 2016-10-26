var _ = require("underscore")

var list = [2, 3, 4, 5]
// test first  指定参数后返回前n个参数
var firstReuslt = _.first(list, 2)
console.log(firstReuslt)

// test initial 排除后n个元素
var initialResult = _.initial(list, 2)
console.log(initialResult)

// test last => first
var last = _.last(list, 2)
console.log(last)

// test rest, index from
var rest = _.rest(list, 2)
console.log(rest)

// test compact .
var temp = [0, "", false, 2, null, NaN, undefined]
var compact = _.compact(temp)
console.log(compact)

// test flatten
var temp = [[1, 2, 3], [1], 1]
console.log(_.flatten(temp))

// test without
console.log(_.without(_.flatten(temp), 1))

// test union
console.log(_.union([1, 2, 3], [2, 3], [4,5]))

//test intersection
console.log(_.intersection([1, 2, 3], [2, 3]))

// test difference
console.log(_.difference([1, 2, 3], [2, 3]))

// test uniq
var temp = [1, 2, 3, 1, 4, 3]
console.log(_.uniq(temp, false, el => el + 1))

// test zip 压缩多维数组

// test object 数组转为对象，如果存在两个数组，组合。重复返回最后一个
console.log(_.object(temp, [1, 2, 3]))

// test indexOf. 可以接一个起始参数 lastIndexOf
console.log(_.indexOf(temp, 1, 2))

// test sortedIndex
console.log(_.sortedIndex(temp, 3))

// test range
console.log(_.range(0, 4))