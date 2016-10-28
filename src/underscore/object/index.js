var _ = require("underscore")

var num = {
  one: 1,
  two: 2,
  three: 3
}
// test keys
console.log(_.keys(num))

// test allKeys
function Stooge(name) {
  this.name = name
}

Stooge.prototype.silly = "hellpp"

console.log(_.allKeys(new Stooge("heell")))

// test mapObject -> val and key
console.log(_.mapObject(num, val => val + 3))

// test pairs -> object to list[key, value]
console.log(_.pairs(num))

// test invert -> key <-> value
console.log(_.invert(num))

// test created
console.log(_.create(Stooge.prototype, {name: "heh", ha: "sa"}))

// test functions
console.log(_.methods(_))

// test findKey
console.log(_.findKey(num, key => key === "1"))

// test extend -- shallowly copy
console.log(_.extend(num, {four: "4"}))
console.log(_.extend(num, _))

// test extend own
console.log(_.extendOwn(num, {five: "5"}))

// pick , object with only picked keys
console.log(_.pick(num, 'one', 'four', 'five'))

// omit, object without omited keys
console.log(_.omit(num, 'one', 'four', 'five'))
console.log(_.omit(num, _.keys(_)))

// defaults, undefined properties with the defaults obejcts

// clone shallowly copy

// tap
console.log(_.has(num, "one"))

// property property -> object passin object
console.log(_.property("two")(num))

// propertyOF  passin property
console.log(_.propertyOf(num)("2"))

//  matcher return a predicate

