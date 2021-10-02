
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
// const arr = [1,2,3];

// console.log("myEach: ")
// arr.myEach( x => console.log(x) );

// console.log("forEach: ")
// arr.forEach( x => console.log(x) );

// MAP //
Array.prototype.myMap = function(callbackFn) {
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        arr[i] = callbackFn(this[i], i, this) ;
    }
    return arr;
};

// TEST
// const exArr =['bibi', 'jhgfghj', 'kmijnuhb']

// console.log("myMap: ")

// console.log( exArr.myMap(function(callbackFn) {return callbackFn;}) )

// console.log("Map: ")
// console.log( exArr.map(function(callbackFn) {return callbackFn;}) )

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        if( callbackFn(this[i]) ) {
            arr[i] = this[i] ;
        }
    }
    return arr;
};

// TEST
// const exArr =['bibi', 'jhgfghj', 'kmijnuhb']

// console.log("myFilter: ")
// console.log( exArr.myFilter(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Filter: ")
// console.log( exArr.filter(function(callbackFn) {return callbackFn.length < 8;}) )

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if ( callbackFn(this[i]) ) {
            return true;
        }
    }
    return false;
};

// TEST
//const exArr =['bibi', 'jhgfghj', 'kmijnuhb']
// const exArr =['bibibibibibibib', 'jhgj', 'kmijnuhjhgfdb']

// console.log("mySome: ")
// console.log( exArr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Some: ")
// console.log( exArr.some(function(callbackFn) {return callbackFn.length < 8;}) )

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if( !callbackFn(this[i]) ) {
            return false;
        }
    }
    return true;
};

// TEST
//const exArr =['bibi', 'jhgfghj', 'kmijnuhb']
// const exArr =['bibibibibibibib', 'jhgj', 'kmijnuhjhgfdb']

// console.log("mySome: ")
// console.log( exArr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

// console.log("Some: ")
// console.log( exArr.some(function(callbackFn) {return callbackFn.length < 8;}) )

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