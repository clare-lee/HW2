// myEach
const arr = [1,2,3];

console.log("myEach: ")
arr.myEach( x => console.log(x) );

console.log("forEach: ")
arr.forEach( x => console.log(x) );

// myMap
const map_arr =['bibi', 'jhgfghj', 'kmijnuhb']

console.log("myMap: ")
console.log( map_arr.myMap(function(callbackFn) {return callbackFn;}) )

console.log("Map: ")
console.log( map_arr.map(function(callbackFn) {return callbackFn;}) )

// myFilter
const filter_arrr =['bibi', 'jhgfghj', 'kmijnuhb']

console.log("myFilter: ")
console.log( filter_arrr.myFilter(function(callbackFn) {return callbackFn.length < 8;}) )

console.log("Filter: ")
console.log( filter_arrr.filter(function(callbackFn) {return callbackFn.length < 8;}) )

// mySome
const some_arr =['bibibibibibibib', 'jgj', 'kmijnuhjhgfdb']

console.log("mySome: ")
console.log( some_arr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

console.log("Some: ")
console.log( some_arr.some(function(callbackFn) {return callbackFn.length < 8;}) )

// myEvery 
// used test from developer.mozilla.org
const isBelowThreshold = (currentValue) => currentValue < 40;

const every_arr = [1, 30, 39, 29, 10, 13];
console.log(every_arr.every(isBelowThreshold));    // expected output: true

// myReduce
// used test from developer.mozilla.org

const reduce_arr = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(reduce_arr.reduce(reducer));    // 1 + 2 + 3 + 4 =1 0
console.log(reduce_arr.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4 = 15

// myIncludes
// used test from developer.mozilla.org

const includes_arr1 = [1, 2, 3];
const includes_arr2 = [1, 2, NaN];
const includes_arr3 = ["1", "2", "3"];
const includes_arr4 = ['a', 'b', 'c'];

// reg examples
console.log(includes_arr1.myIncludes(2))         // true
console.log(includes_arr1.myIncludes(4))         // false
console.log(includes_arr1.myIncludes(3, 3))      // false
console.log(includes_arr1.myIncludes(3, -1))     // true     
console.log(includes_arr2.myIncludes(NaN))       // true     error Can't seem to fix this no matter what
console.log(includes_arr3.myIncludes(3))         // false
console.log('........')
// fromIndex is greater than or equal to the array length
console.log(includes_arr4.myIncludes('c', 3))    // false
console.log(includes_arr4.myIncludes('c', 100))  // false
console.log('........')
// Computed index is negative
console.log(includes_arr4.myIncludes('a', -100)) // true
console.log(includes_arr4.myIncludes('b', -100)) // true
console.log(includes_arr4.myIncludes('c', -100)) // true
console.log(includes_arr4.myIncludes('a', -2))   // false    

// myIndexOf
// used test from developer.mozilla.org
const indexOf_arr = [2, 9, 9];

console.log(indexOf_arr.myIndexOf(2));     // 0
console.log(indexOf_arr.myIndexOf(7));     // -1
console.log(indexOf_arr.myIndexOf(9, 2));  // 2
console.log(indexOf_arr.myIndexOf(2, -1)); // -1
console.log(indexOf_arr.myIndexOf(2, -3)); // 0

// myPush
// used test from developer.mozilla.org

var push_arr = [1,2,3];
console.log(push_arr.myPush(4,5,6)); // 6
console.log(push_arr)                // [1, 2, 3, 4, 5, 6]

// myLastIndexOf
// used test from developer.mozilla.org

const lastIndexOf_arr = [2, 5, 9, 2];
console.log(lastIndexOf_arr.myLastIndexOf(2));         // 3
console.log(lastIndexOf_arr.myLastIndexOf(7));         // -1
console.log(lastIndexOf_arr.myLastIndexOf(2, 3));      // 3
console.log(lastIndexOf_arr.myLastIndexOf(2, 2));      // 0
console.log(lastIndexOf_arr.myLastIndexOf(2, -2));     // 0
console.log(lastIndexOf_arr.myLastIndexOf(2, -1));     // 3

// grabKeys
// used test from developer.mozilla.org

const keys_notArr1 = 'asdf'
const keys_notArr2 = 1234
const keys_arr1 = {a: 1, b: 2, c: 3};
const keys_arr2 = ['a', 'b', 'c'];

console.log( Object.grabKeys(keys_notArr1) );    // [ '0', '1', '2', '3' ]
console.log( Object.grabKeys(keys_notArr2) );    // []
console.log( Object.grabKeys(keys_arr1) );       // [ 'a', 'b', 'c' ]
console.log( Object.grabKeys(keys_arr2) );       // [ '0', '1', '2' ]

// grabValues
// used test from developer.mozilla.org

const values_notArr1 = 'asdf'
const values_notArr2 = 1234
const values_arr1 = {a: 1, b: 2, c: 3};
const values_arr2 = ['a', 'b', 'c'];

console.log( Object.grabValues(values_notArr1) );  // [ 'a', 's', 'd', 'f' ]
console.log( Object.grabValues(values_notArr2) );  // []
console.log( Object.grabValues(values_arr1) );     // [ 1, 2, 3 ]
console.log( Object.grabValues(values_arr2) );     // [ 'a', 'b', 'c' ]