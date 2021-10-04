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