var _ = require("underscore")._;

// test each. 不修改底层数组和对象,需要重新创建
var list = [1, 2, 3, 4, 5];
var result = _.each(list, (el) => el * 2);
console.log(result);

// test map. 返回一个新的数组和对象
var person = {
  lastname: "sad",
  firstname: "sda"
}
var mapResult = _.map(list, el => el * 2);
var mapPerson = _.map(person, value => value + "ha?");
console.log(mapResult);
console.log(mapPerson);

// test reduce. memo 是函数的初始值，如果没有声明，从列表的第一个元素开始计算。如果声明则传入函数作为初始值
var reduceResult = _.reduce(list, (pre, cur) => pre * 2 + cur, -1);
console.log(reduceResult);
// 右结合
var reduceRResult = _.reduceRight(list, (pre, cur) => pre * 2 + cur, -1);
console.log(reduceRResult);

// test find. find any
var findResult = _.find(list, el => el > 2);
console.log(findResult);

// test filter.
var filterResult = _.filter(list, el => el % 2 == 0);
console.log(filterResult);

// test where
var temp = {a: "b"}
var personList = [person, temp];
console.log(personList)
var whereResult = _.where(personList, {firstname: "sda"});
console.log(whereResult);
// find first
var whereResult = _.findWhere(personList, {firstname: "sda"});
console.log(whereResult);

// test reject. filter ~ reject
var rejectResult = _.reject(list, el => el % 2 == 0);
console.log(rejectResult)

// test every
var everyResult = _.every(list, el => el > 2)
console.log(everyResult)

// test any
var anyResult = _.any(list, el => el > 2)
console.log(anyResult)

// test contains
var containResult = _.contains(list, 2);
console.log(containResult)

// test invoke 可选参数会被增加到调用的方法上
var invokeResult = _.invoke(list, 'abs', [3,3,4])
console.log(invokeResult)

// test pluck
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var pluckResult = _.pluck(stooges, 'name');
console.log(pluckResult)

// test max min
var maxResult = _.min(stooges, el => el.age)
console.log(maxResult)

// test sortBy
var sortResult = _.sortBy(list, el => el * 2)
console.log(sortResult)

// test groupBy. if func是字符串，根据对象中的属性汇聚
var groupResult = _.groupBy(list, el => 3)
console.log(groupResult)

// indexBy
var indexResult = _.indexBy(stooges, 'name')
console.log(indexResult)

// countBy 类似groupBy， 返回的是数量而不是值