// const arr = [1,2,3];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] ===  undefined) continue;
        //element
        //element, index
        //element, index, array
        callbackFn(this[i], i, this);
    }
};

// TEST

// console.log("myEach: ")
// arr.myEach( x => console.log(x) );

// console.log("forEach: ")
// arr.forEach( x => console.log(x) );

// MAP //
Array.prototype.myMap = function(callbackFn) {
    result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callbackFn(this[i], i, this) ;
    }
    return result;
};

// TEST
const exArr =['bibi', 'jhgfghj', 'kmijnuhb']

console.log("myMap: ")

console.log( exArr.myMap(function(callbackFn) {return callbackFn;}) )

console.log("Map: ")
console.log( exArr.map(function(callbackFn) {return callbackFn;}) )

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};